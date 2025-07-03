import { useContext } from "react";
import { searchResultsContext } from "../providers/SearchResultsProvider.jsx";

export default function useSearch() {
  //Make API request given search term
  //Return the groups found
  const { searchTerm, setSearchTerm, groups } =
    useContext(searchResultsContext);

  return { searchTerm, setSearchTerm, groups };
}
