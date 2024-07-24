import { useEffect, useState } from "react";
import type { CategoryList, CategoryListProps } from "../interfaces";
import Loading from "../loading/Loading";
import fetchCategories from "../Services/fetchCategories";

const CategoryList: React.FC<CategoryListProps> = ({
  filterItems,
  children,
}) => {
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
      <div className="flex items-center justify-center">
        <ul className="flex">
          <li
            className="ml-8 text-base	text-right text-gray-500 hover:text-red-500"
            onClick={() => filterItems(null)}
          >
            <a className="nav-link" href="#">
              همه فست فودها
            </a>
          </li>
          {categories.map((category) => (
            <li
              className="ml-8 text-base	text-right text-gray-500 hover:text-red-500"
              onClick={() => filterItems(category.id.toString())}
              key={category.id}
            >
              <a className="nav-link" href="#">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
        {children}
      </div>
    );
  };

  return (
    <nav className="sm:container sm:mx-auto px-[200px] -mt-[42px]">
      <div className="flex items-center justify-center bg-white rounded-[5px] shadow-lg py-1 h-[80px]">
        {renderContent()}
      </div>
    </nav>
  );
};

export default CategoryList;
