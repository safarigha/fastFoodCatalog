import { useState } from "react";
import { SearchBarProps } from "../interfaces";
import { BsSearch } from "react-icons/bs";
const SearchBar: React.FC<SearchBarProps> = ({ searchItems }) => {
  const [searchItem, SetSearchItem] = useState("");
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchItems(searchItem);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className=" flex items-center border rounded-[6px] w-[250px]">
        <BsSearch className="mr-2 text-gray-500" />
        <input
          placeholder="جستجوی فست فود ..."
          className="text-gray-500 text-sm p-2 w-full hover:outline-none	focus:outline-none"
          value={searchItem}
          onChange={(e) => SetSearchItem(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
