import { useEffect, useState } from "react";
import axios from "../axios";
import type { CategoryList } from "../interfaces";

const CategoryList = () => {
  const [categories, setCategories] = useState<CategoryList[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  return (
    <nav className="container -mt-[42px]">
      <div className="flex items-center justify-center bg-white rounded-[5px] shadow-lg py-1 h-[80px]">
        <ul className="flex">
          <li className="ml-6 text-base	text-right text-gray-500 hover:text-red-500">
            <a className="nav-link" href="#">
              همه فست فودها
            </a>
          </li>
          {categories.map((category) => (
            <li
              className="ml-6 text-base	text-right text-gray-500 hover:text-red-500"
              key={category.id}
            >
              <a className="nav-link" href="#">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryList;
