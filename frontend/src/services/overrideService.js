import api from "../api/api";

// GET ALL
export const getOverrides = () =>
  api.get("/overrides/");

// GET ONE
export const getOverrideById = (id) =>
  api.get(`/overrides/${id}`);

// CREATE
export const createOverride = (data) =>
  api.post("/overrides/", data);

// UPDATE
export const updateOverride = (id, value) =>
  api.put(`/overrides/${id}?value=${value}`);

// DELETE
export const deleteOverride = (id) =>
  api.delete(`/overrides/${id}`);