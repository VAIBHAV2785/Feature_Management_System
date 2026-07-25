import api from "../api/api";

// Evaluate Feature Flag
export const evaluateFeature = async (data) => {
  return await api.post("/flags/evaluate", data);
};