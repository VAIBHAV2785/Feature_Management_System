import api from "../api/axios";

export async function getAuditLogs() {

    const response = await api.get("/audit-logs");

    return response.data;

}

export async function getAuditLog(id) {

    const response = await api.get(`/audit-logs/${id}`);

    return response.data;

}