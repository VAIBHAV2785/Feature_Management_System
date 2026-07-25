import api from "../api/api";

// ==========================
// GET ALL RULES
// ==========================
export const getRules = () =>
  api.get("/targeting-rules/");

// ==========================
// CREATE RULE
// ==========================
export const createRule = (data) =>
  api.post("/targeting-rules/", data);

// ==========================
// DELETE RULE
// ==========================
export const deleteRule = (id) =>
  api.delete(`/targeting-rules/${id}`);