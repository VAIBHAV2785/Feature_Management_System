import api from "../api/api";

// GET ALL
export const getGroups = () =>
  api.get("/groups/");

// GET ONE
export const getGroupById = (id) =>
  api.get(`/groups/${id}`);

// CREATE
export const createGroup = (data) =>
  api.post("/groups/", data);

// UPDATE
export const updateGroup = (id, data) =>
  api.put(`/groups/${id}`, data);

// DELETE
export const deleteGroup = (id) =>
  api.delete(`/groups/${id}`);