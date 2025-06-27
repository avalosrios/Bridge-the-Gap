import "../styles/MembersList.css";
import MemberIcon from "./MemberIcon";

export default function MembersList({ members }) {
  return (
    <div>
      <h2>Members</h2>
      <div className="members-list">
        {members.map((user) => {
          return <MemberIcon member={user} />;
        })}
      </div>
    </div>
  );
}
