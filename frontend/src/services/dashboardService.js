import api from "../api/api";

// Dashboard Statistics
export const getDashboardStats = () =>
  api.get("/dashboard/stats");

// Recent Activity
export const getRecentActivity = () =>
  api.get("/dashboard/recent-activity");

// System Status
export const getSystemStatus = () =>
  api.get("/dashboard/system-status");