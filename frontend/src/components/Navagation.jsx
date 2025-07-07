import "../styles/Navagation.css";
import { useState } from "react";
import useSearch from "../hooks/useSearch.js";

export default function Navagation({ onSearch, onClear }) {
  const [searchedTerm, setSearchedTerm] = useState("");
  const { setSearchTerm } = useSearch();

  const handleSearch = () => {
    setSearchTerm(searchedTerm);
    onSearch();
  };

  const handleClear = () => {
    setSearchedTerm("");
    onClear();
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search..."
        className="search-bar"
        value={searchedTerm}
        onChange={(e) => setSearchedTerm(e.target.value)}
      />
      <button onClick={handleClear}>X</button>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
