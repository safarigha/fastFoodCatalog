import axios from "../axios";
import { FastFoodItem } from "../interfaces";

const fetchFastFoodSearch = async (
  term: string | null
): Promise<FastFoodItem[]> => {
  const response = await axios.get(
    `/FastFood/search/${term ? "?term=" + term : ""}`
  );

  return response.data;
};

export default fetchFastFoodSearch;
