import { http3 } from "../../utils/http3";
import { API_ENDPOINTS } from "../../utils/api-endpoints";

export const searchMovie = async (q) => {
  const search = await http3.get(`${API_ENDPOINTS.SEARCH_MOVIE}?query=${q}&api_key=$`);
  return search.data
};


