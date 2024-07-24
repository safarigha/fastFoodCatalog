import { useEffect, useState } from "react";
import { FastFoodItem } from "./interfaces";
import "./App.css";
import "./index.css";
import Header from "./header/Header";
import Loading from "./loading/Loading";
import CategoryList from "./categoryList/CategoryList";
import FastFoodList from "./fastFoodList/FastFoodList";
import SearchBar from "./searchBar/SearchBar";
import notFound from "./assets/images/404.png";
import fetchFastFoodItems from "./Services/fetchFastFoodItems";
import fetchFastFoodSearch from "./Services/fetchFastFoodSearch";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState<FastFoodItem[]>([]);

  const fetchData = async (categoryId?: string) => {
    setLoading(true);
    const data = await fetchFastFoodItems(categoryId);
    setLoading(false);
    setFastFoodItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterItems = (categoryId: string | null) => {
    fetchData(categoryId || undefined);
  };

  const searchTerms = async (term: string | null) => {
    setLoading(true);
    const data = await fetchFastFoodSearch(term);
    setLoading(false);
    setFastFoodItems(data);
  };

  const renderContent = () => {
    if (loading) return <Loading />;
    return fastFoodItems.length === 0 ? (
      <>
        <p className=" text-red-500 text-center font-black	text-xl">
          برای کلید واژه فوق هیچ آیتمی یافت نشد
        </p>
        <img
          className="flex items-center justify-center w-[50%] mx-auto rounded-full"
          src={notFound}
          alt="not found"
        />
      </>
    ) : (
      <FastFoodList fastFoodItems={fastFoodItems} />
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      <CategoryList filterItems={filterItems}>
        <SearchBar
          searchItems={searchTerms}
          className="w-[100px] gap-[5px] p-2"
        />
      </CategoryList>
      <div className="sm:container sm:mx-auto px-[200px] mt-4">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
