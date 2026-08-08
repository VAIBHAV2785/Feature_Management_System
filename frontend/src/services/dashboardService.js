import api from "../api/api";

// ==========================
// Dashboard Summary
// ==========================

export const getDashboardStats = () =>
  api.get("/dashboard/stats");

// ==========================
// Analytics
// ==========================

export const getAnalytics = () =>
  api.get("/analytics");

export const getEvaluationCounts = () =>
  api.get("/analytics/evaluations");

export const getEnvironmentUsage = () =>
  api.get("/analytics/environment-usage");

// ==========================
// Audit Logs
// ==========================

export const getAuditLogs = () =>
  api.get("/audit-logs");

export const getRecentActivity = () =>
  api.get("/dashboard/recent-activity");

// ==========================
// System Status
// ==========================

export const getSystemStatus = () =>
  api.get("/dashboard/system-status");