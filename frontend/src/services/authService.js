import api from "../api/api";

export const signup = (data) =>
  api.post("/auth/signup", data);

export const login = (data) =>
  api.post("/auth/login", data);

export const getUsers = () =>
  api.get("/auth/users");

export const assignGroup = (userId, groupId) =>
  api.put(`/auth/users/${userId}/group`, {
    group_id: groupId,
  });