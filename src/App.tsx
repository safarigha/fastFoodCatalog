import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./categoryList/CategoryList";
import Header from "./header/Header";
import "./index.css";
import axios from "./axios";
import Loading from "./loading/Loading";
import FastFoodList from "./fastFoodList/FastFoodList";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState([]);

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) return <Loading />;
    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <CategoryList />
      <div className="sm:container sm:mx-auto px-[200px] mt-4">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
