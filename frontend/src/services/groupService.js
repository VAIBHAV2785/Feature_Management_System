import api from "../api/api";

// Get all groups
export const getGroups = async () => {
  return await api.get("/groups");
};

// Create group
export const createGroup = async (data) => {
  return await api.post("/groups", data);
};

// Update group
export const updateGroup = async (id, data) => {
  return await api.put(`/groups/${id}`, data);
};

// Delete group
export const deleteGroup = async (id) => {
  return await api.delete(`/groups/${id}`);
};