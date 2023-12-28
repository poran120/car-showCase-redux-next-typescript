"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { manufacturers } from "../constants/index";

const SearchBar = () => {
  const [manufacturers, setManufacturers] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturers={manufacturers}
          setManufacturers={setManufacturers}
        />
      </div>
    </form>
  );
};

export default SearchBar;
