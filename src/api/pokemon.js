import { API_URL } from "@env";
import axios from "axios";

export const getPokemonsApi = async () => {
  try {
    const url = `${API_URL}/pokemon?limit=20&offset=0`;
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};
