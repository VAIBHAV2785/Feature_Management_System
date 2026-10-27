# Feature Flag Audit Logging & Analytics Dashboard — Backend

Implements **M3 Task 2** (Audit Logging System) and **M3 Task 3** (Analytics &
Audit Dashboard) using **FastAPI + PostgreSQL + Redis**, plus the minimal
Feature Flag / Environment / Targeting layer needed to make the audit trail
and analytics meaningful.

## What's implemented

**Supporting layer (flags/environments/targeting/evaluation)**
- JWT auth with roles (admin, developer, viewer)
- Environments (development/staging/production)
- Feature flags: create/list/get/delete
- Per-environment enable/disable + rollout percentage
- User/group targeting (explicit overrides that bypass rollout %)
- `POST /flags/evaluate` — the "SDK" endpoint an app would call, which logs
  every evaluation for analytics

**M3 Task 2 — Audit Logging System**
- `audit_logs` table: user, action, flag_id, environment_id, old_state,
  new_state, timestamp (old/new state stored as JSON)
- Every mutating action is captured: Create/Update/Delete/Enable/Disable Flag,
  Rollout Changed, User/Group Target Added/Removed
- `GET /audit-logs` — filter by flag, flag_key, user, action, and date range
- `GET /audit-logs/{id}` — single log detail (old state / new state)

**M3 Task 3 — Analytics & Audit Dashboard**
- `GET /analytics/flags` — evaluation count per flag + most frequently evaluated
- `GET /analytics/usage` — evaluations broken down by environment
- `GET /analytics/summary` — total flags, active flags, today's evaluations,
  audit logs today (dashboard summary cards)
- Redis is used for live evaluation counters (`eval_count:flag:*`,
  `eval_count:env:*`, `eval_count:today`) so the summary card reflects
  evaluations the instant they happen, without waiting on a DB aggregate.
  Falls back to the DB count if Redis is unavailable.

## 1. Prerequisites

- Python 3.10+
- PostgreSQL running locally (or update `DATABASE_URL`)
- Redis running locally (or update `REDIS_URL`)

## 2. Setup in VS Code

```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate
source venv/bin/activate

pip install -r requirements.txt

cp .env.example .env
# edit .env with your actual Postgres/Redis credentials
```

```sql
CREATE DATABASE feature_flags_db;
```

## 3. Run

```bash
uvicorn app.main:app --reload
```

- API base: http://127.0.0.1:8000
- Swagger docs: http://127.0.0.1:8000/docs

Tables are auto-created on first run via SQLAlchemy. Switch to Alembic
migrations for a real deployment.

VS Code `launch.json`:
```json
{
  "name": "FastAPI",
  "type": "debugpy",
  "request": "launch",
  "module": "uvicorn",
  "args": ["app.main:app", "--reload"],
  "cwd": "${workspaceFolder}/backend"
}
```

## 4. Quick test flow (via /docs)

1. `POST /api/auth/register` — create an `admin` user, then a `developer` user
2. `POST /api/auth/login` — get a JWT, "Authorize" in Swagger
3. `POST /api/environments` — create `development`, `staging`, `production`
4. `POST /api/flags` — create a flag, e.g. `{"key": "new_dashboard", "name": "New Dashboard"}`
5. `POST /api/flags/{id}/environments/{env_id}/enable` then `.../rollout` to set a percentage
6. `POST /api/flags/{id}/targets` — add a user/group target
7. `POST /api/flags/evaluate` (no auth needed) — call it a bunch of times with different `subject_id`s
8. `GET /api/audit-logs` — see every change you just made, with old/new state
9. `GET /api/analytics/flags`, `/usage`, `/summary` — see the numbers move

## 5. Project structure

```
backend/
  app/
    core/        # config, db session, JWT/password hashing, redis client
    models/      # users, environments, feature flags, targets, evaluations, audit logs
    schemas/     # Pydantic request/response schemas
    routers/     # API endpoints, grouped by feature
    services/    # audit.py - the record_audit_log() helper every mutation calls
    deps.py      # auth + role-based access control
    main.py      # FastAPI app entrypoint
  requirements.txt
  .env.example
```

## **Notes for production 

- Switch `Base.metadata.create_all` to Alembic migrations.
- `evaluate_flag` is intentionally unauthenticated (it's the SDK-facing
  endpoint) — in production, front it with an API key per application instead
  of leaving it fully open.
- Rollout evaluation uses `random.randint`, which is fine for a demo but not
  sticky (the same user can get a different result on repeat calls). A real
  implementation would hash `subject_id + flag_key` into a stable bucket.
