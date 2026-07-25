import api from "../api/api";

// Get Members of a Group
export const getGroupMembers = (groupId) =>
  api.get(`/groups/${groupId}/members`);

// Add User to Group
export const addUserToGroup = (groupId, userId) =>
  api.post(`/groups/${groupId}/users/${userId}`);

// Remove User from Group
export const removeUserFromGroup = (groupId, userId) =>
  api.delete(`/groups/${groupId}/users/${userId}`);