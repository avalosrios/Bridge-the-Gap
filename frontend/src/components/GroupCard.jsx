import "../styles/GroupCard.css";
import { Link } from "react-router";
import MemberCard from "./MemberCard";

export default function GroupCard({ group, members }) {
  if (group !== null) {
    return (
      <div className="group-card">
        <Link to={`/group/${group.id}`} className="group-link"></Link>
        <div className="group-content">
          <h2>{group.name}</h2>
          <div className="group-info">
            <img src={group.img} alt="Group Image" className="group-img" />
            <div className="member-list">
              <p className="member-list-title">Member List:</p>
              {members?.map((member) => {
                return <MemberCard member={member} key={member.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p>No group data</p>
    </div>
  );
}
