import api from "../api/api";

// =========================
// GET ALL USERS
// =========================
export const getUsers = () =>
  api.get("/auth/users");

// =========================
// GET SINGLE USER
// =========================
export const getUser = (id) =>
  api.get(`/auth/users/${id}`);

// =========================
// CREATE USER
// =========================
export const createUser = (data) =>
  api.post("/auth/signup", data);

// =========================
// UPDATE USER
// =========================
export const updateUser = (id, data) =>
  api.put(`/auth/users/${id}`, data);

// =========================
// DELETE USER
// =========================
export const deleteUser = (id) =>
  api.delete(`/auth/users/${id}`);

// =========================
// ASSIGN GROUP
// =========================
export const assignGroup = (
  userId,
  groupId
) =>
  api.put(`/auth/users/${userId}/group`, {
    group_id: groupId,
  });