import axios from "../axios";
import type { CategoryList } from "../interfaces";

const fetchCategories = async (): Promise<CategoryList[]> => {
  const response = await axios.get("/FoodCategory/categories");
  return response.data;
};

export default fetchCategories;
