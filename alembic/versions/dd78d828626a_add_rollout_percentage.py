"""add rollout percentage

Revision ID: dd78d828626a
Revises: def5bfa1c0f9
Create Date: 2026-07-16

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers
revision: str = "dd78d828626a"
down_revision: Union[str, Sequence[str], None] = "def5bfa1c0f9"
branch_labels = None
depends_on = None


def upgrade() -> None:

    op.add_column(
        "feature_flags",
        sa.Column(
            "rollout_percentage",
            sa.Integer(),
            nullable=False,
            server_default="100",
        ),
    )

    # Remove the temporary DB default
    op.alter_column(
        "feature_flags",
        "rollout_percentage",
        server_default=None,
    )


def downgrade() -> None:

    op.drop_column(
        "feature_flags",
        "rollout_percentage",
    )