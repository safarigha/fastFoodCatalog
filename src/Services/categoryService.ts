import axios from "../axios";
import type { CategoryList } from "../interfaces";

export const fetchCategories = async (): Promise<CategoryList[]> => {
  const response = await axios.get("/FoodCategory/categories");
  return response.data;
};
