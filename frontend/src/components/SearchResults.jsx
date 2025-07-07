import GrouopCard from "./GroupCard";
import "../styles/SearchResults.css";
import useSearch from "../hooks/useSearch.js";
import useUserGroups from "../hooks/useUserGroups.js";

export function SearchResults() {
  const { groups } = useSearch();
  const { groups: userGroups, isLoading } = useUserGroups();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="search-results">
      {groups?.map((group) => (
        <GrouopCard
          group={group}
          members={group.members}
          key={group.id}
          joinedGroup={userGroups.some(
            (userGroup) => userGroup.id === group.id,
          )}
          home={false}
        />
      ))}
    </div>
  );
}
