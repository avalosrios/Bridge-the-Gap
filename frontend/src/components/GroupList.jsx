import "../styles/GroupList.css";
import GroupCard from "./GroupCard";

export default function GroupList({ groups, onOpen }) {
  return (
    <section className="group-list">
      <button className="create-group-button" onClick={onOpen}>
        Create
      </button>
      {groups.map((group) => {
        return (
          <GroupCard group={group} key={group.id} members={group.members} />
        );
      })}
    </section>
  );
}
