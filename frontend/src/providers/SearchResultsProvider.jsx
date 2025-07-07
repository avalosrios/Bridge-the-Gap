import { createContext, useEffect, useState } from "react";
import { httpRequest } from "../utils/utils.js";
import useSearch from "../hooks/useSearch.js";

const searchResultsContext = createContext();

function SearchResultsProvider({ children }) {
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const SEARCH_URL = `/api/groups/?name=${searchTerm}`;

  useEffect(() => {
    httpRequest(SEARCH_URL, "GET").then((groups) => {
      setGroups(groups);
    });
  }, [searchTerm]);

  useEffect(() => {});

  return (
    <searchResultsContext.Provider
      value={{ groups, searchTerm, setSearchTerm }}
    >
      {children}
    </searchResultsContext.Provider>
  );
}

export { searchResultsContext, SearchResultsProvider };
