import axios from "../axios";
import { FastFoodItem } from "../interfaces";

const fetchFastFoodItems = async (
  categoryId?: string
): Promise<FastFoodItem[]> => {
  const response = await axios.get(
    `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
  );
  return response.data;
};

export default fetchFastFoodItems;
