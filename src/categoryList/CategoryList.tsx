import { useEffect, useState } from "react";
import type { CategoryList } from "../interfaces";
import Loading from "../loading/Loading";
import { fetchCategories } from "../Services/categoryService";

const CategoryList = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<CategoryList[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const renderContent = () => {
    if (loading) return <Loading colorTheme="#FF0000" />;
    return (
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
    );
  };

  return (
    <nav className="container -mt-[42px]">
      <div className="flex items-center justify-center bg-white rounded-[5px] shadow-lg py-1 h-[80px]">
        {renderContent()}
      </div>
    </nav>
  );
};

export default CategoryList;
