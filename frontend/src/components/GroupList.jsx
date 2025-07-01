import "../styles/GroupList.css";
import GroupCard from "./GroupCard";
import { useEffect, useState } from "react";
import { httpRequest } from "../utils/utils.js";

const GROUPS_URL = "/api/groups";
// Hook to get all groups, this is good enough for now
// TODO: consider adding pagination and filtering later
function useGroups() {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    httpRequest(GROUPS_URL, "GET")
      .then((groupList) => {
        setGroups(groupList);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { groups, isLoading };
}

export default function GroupList({ onOpen }) {
  const { groups } = useGroups();
  return (
    <section className="group-list">
      <button className="create-group-button" onClick={onOpen}>
        Create
      </button>
      {groups.map((group) => {
        return (
          <GroupCard
            group={group}
            key={group.id}
            members={group ? group.members : []}
          />
        );
      })}
    </section>
  );
}
