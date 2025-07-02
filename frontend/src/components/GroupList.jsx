import "../styles/GroupList.css";
import GroupCard from "./GroupCard";
import useUserGroups from "../hooks/useUserGroups.js";

export default function GroupList({ onOpen }) {
  const { groups } = useUserGroups();

  return (
    <section className="group-list">
      <button className="create-group-button" onClick={onOpen}>
        Create
      </button>
      {groups?.map((group) => {
        return (
          <GroupCard group={group} key={group.id} members={group.members} />
        );
      })}
    </section>
  );
}
