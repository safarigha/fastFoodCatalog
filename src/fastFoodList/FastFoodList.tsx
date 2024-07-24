import FastFoodItems from "../fastFoodItems/FastFoodItems";
import { FastFoodListProps } from "../interfaces";

const FastFoodList: React.FC<FastFoodListProps> = ({ fastFoodItems }) => {
  return (
    <div className="grid  sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-6">
      {fastFoodItems.map((fastFood) => {
        return (
          <div className="flex justify-center w-full " key={fastFood.id}>
            <FastFoodItems {...fastFood} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;
