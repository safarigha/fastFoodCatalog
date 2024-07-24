import { HiShoppingCart } from "react-icons/hi";
import { FastFoodItem } from "../interfaces";
import { useState } from "react";

const FastFoodItems: React.FC<FastFoodItem> = ({
  name,
  price,
  ingredients,
  imageUrl,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className=" bg-white rounded-lg shadow-lg relative flex flex-col h-full">
      <span className=" absolute right-4 top-2 bg-green-500 text-white text-sm font-medium px-2 py-1 rounded-lg">
        قیمت: {price.toLocaleString()} تومان
      </span>
      <div className="relative">
        {isLoading && (
          <div className="w-full h-48 bg-gray-300 animate-pulse rounded-t-lg"></div>
        )}
        <img
          className="w-full object-cover rounded-t-lg"
          src={imageUrl}
          alt={name}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className=" text-center pt-3 pb-2 flex flex-col flex-grow mr-4 ml-4 mb-4">
        <h5 className="mb-2 text-base font-semibold">{name}</h5>
        <div className="text-xs font-bold text-gray-500 mb-3">
          {ingredients}
        </div>
        <button className="mt-auto  border border-green-500 text-green-500 text-sm w-full font-bold py-2 rounded-lg hover:bg-green-500 hover:text-white transition-colors">
          <HiShoppingCart className="text-base ml-3 inline-block" />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};
export default FastFoodItems;
