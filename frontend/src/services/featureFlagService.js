import api from "../api/api";

// GET ALL
export const getFeatureFlags = () => api.get("/flags/");

// GET ONE
export const getFeatureFlagById = (id) => api.get(`/flags/${id}`);

// CREATE
export const createFeatureFlag = (data) => api.post("/flags/", data);

// UPDATE
export const updateFeatureFlag = (id, data) =>
  api.put(`/flags/${id}`, data);

// DELETE
export const deleteFeatureFlag = (id) =>
  api.delete(`/flags/${id}`);