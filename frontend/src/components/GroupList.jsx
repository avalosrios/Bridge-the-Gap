import "../styles/GroupList.css";
import GroupCard from "./GroupCard";

export default function GroupList({ groups }) {
  return (
    <section className="group-list">
      {groups.map((group) => {
        return <GroupCard group={group} key={group.id} />;
      })}
    </section>
  );
}
