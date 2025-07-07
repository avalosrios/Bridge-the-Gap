import "../styles/GroupCard.css";
import { Link } from "react-router";
import MemberCard from "./MemberCard";
import { httpRequest } from "../utils/utils.js";
import { userGroupContext } from "../providers/UserGroupsProvider.jsx";
import { useContext } from "react";

const USER_GROUPS_URL = "/api/user/groups";

export default function GroupCard({ group, members, joinedGroup, home }) {
  const { groups, setGroups } = useContext(userGroupContext);

  const handleJoin = () => {
    if (!joinedGroup) {
      console.log("join");
      httpRequest(USER_GROUPS_URL, "PUT", { groupId: group.id }).then(() => {
        setGroups([...groups, group]);
      });
    }
  };

  if (group !== null) {
    return (
      <div className="group-card">
        {home && <Link to={`/group/${group.id}`} className="group-link"></Link>}
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
        <button
          className={`${"join-group-button"} ${joinedGroup ? "joined-group" : "unjoined-group"}`}
          onClick={handleJoin}
        >
          Join
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>No group data</p>
    </div>
  );
}
