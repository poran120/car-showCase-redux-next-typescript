"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { manufacturers } from "../constants/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import SearchButton from "./SearchButton";
import Image from "next/image";

const SearchBar = () => {
  const dispatch = useDispatch();
  //
  const query: string = useSelector((state: RootState) => state.query.query);
  console.log(query);
  //

  const [manufacturers, setManufacturers] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          query={query}
          manufacturers={manufacturers}
          setManufacturers={setManufacturers}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          // value={model}
          // onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
