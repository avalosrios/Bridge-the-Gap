import "../styles/MemberSearch.css";
import { useState, useEffect } from "react";
import { httpRequest } from "../utils/utils";
import AddMemberTile from "./AddMemberTile";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function MemberSearch({ onChange }) {
  const [addedUsers, setAddedUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const USER_URL = new URL("/users", BASE_URL);
    httpRequest(USER_URL, "GET").then((userList) => {
      setUsers(userList);
    });
  }, []);

  const addMember = async (member) => {
    setUsers(users.filter((user) => user.id !== member.id));
    setAddedUsers([...addedUsers, member]);
    onChange([...addedUsers, member]);
  };

  const removeMember = async (member) => {
    setAddedUsers(addedUsers.filter((user) => user.id !== member.id));
    setUsers([...users, member]);
    onChange(addedUsers.filter((user) => user.id !== member.id));
  };

  return (
    <div>
      <div className="added-members">
        <p>Add to Group:</p>
        {addedUsers.map((user) => {
          return <AddMemberTile member={user} onClick={removeMember} />;
        })}
      </div>

      <p>Add Members:</p>
      <div className="unadded-members">
        {users.map((user) => {
          return <AddMemberTile member={user} onClick={addMember} />;
        })}
      </div>
    </div>
  );
}
