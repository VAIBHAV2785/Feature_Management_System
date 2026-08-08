import api from "../api/axios";

export async function getDashboardStatistics() {
    const response = await api.get("/analytics/");
    return response.data;
}

export async function getEvaluationCounts() {
    const response = await api.get("/analytics/evaluations");
    return response.data;
}

export async function getEnvironmentUsage() {
    const response = await api.get("/analytics/environment-usage");
    return response.data;
}