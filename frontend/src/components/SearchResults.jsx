import GrouopCard from "./GroupCard";
import "../styles/SearchResults.css";
import useSearch from "../hooks/useSearch.js";

export default function SearchResults() {
  const { groups } = useSearch();

  return (
    <div className="search-results">
      {groups?.map((group) => (
        <GrouopCard group={group} members={group.members} key={group.id} />
      ))}
    </div>
  );
}
