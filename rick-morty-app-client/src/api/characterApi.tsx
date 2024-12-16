import axiosInstance from "./axiosInstance";

export const fetchCharacters = async () => {
  const response = await axiosInstance.get("/character");
  return response.data.results;
};
