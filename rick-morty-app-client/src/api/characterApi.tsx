import axiosInstance from "./axiosInstance";
import { Character } from "types/Character";

export const getCharacters = async (): Promise<Character[]> => {
  const response = await axiosInstance.get("/character");
  return response.data.results as Character[];
};
