import { API_URL } from "@env";
import axios from "axios";

export const getPokemonsApi = async (endpointUrl) => {
  try {
    const url = `${API_URL}/pokemon?limit=20&offset=0`;
    const response = await axios.get(endpointUrl || url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetailsByUrlApi = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
