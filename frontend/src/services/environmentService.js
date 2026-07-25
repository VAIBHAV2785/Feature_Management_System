import api from "../api/api";

// GET ALL
export const getEnvironments = () =>
  api.get("/environments/");

// GET ONE
export const getEnvironmentById = (id) =>
  api.get(`/environments/${id}`);

// CREATE
export const createEnvironment = (data) =>
  api.post("/environments/", data);

// UPDATE
export const updateEnvironment = (id, data) =>
  api.put(`/environments/${id}`, data);

// DELETE
export const deleteEnvironment = (id) =>
  api.delete(`/environments/${id}`);