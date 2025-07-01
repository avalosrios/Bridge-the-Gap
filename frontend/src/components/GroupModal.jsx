import "../styles/GroupModal.css";
import { useState } from "react";
import MemberSearch from "./MemberSearch";

const defaultGroup = {
  name: "",
  img: "/default_group_pic.png",
  members: [],
};

export default function GroupModal({ displayMode, onClose, onCreate }) {
  const [newGroup, setNewGroup] = useState(defaultGroup);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setNewGroup({
        ...newGroup,
        img: `/${event.target.files[0].name}`,
      });
    }
  };

  const handleInputChange = (evt) => {
    setNewGroup({
      ...newGroup,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleMemberChange = (members) => {
    setNewGroup({
      ...newGroup,
      members: members,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onCreate(newGroup);
    onClose();
  };

  return (
    <section className={displayMode} onSubmit={handleSubmit}>
      <form className="modal-content">
        <span className="close" onClick={onClose}>
          X
        </span>
        <h2>Create New Group:</h2>
        <h4>Name:</h4>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={newGroup.name}
          placeholder="New Group..."
          required
        />
        <h4>Group Image:</h4>
        <input type="file" onChange={handleFileChange} />
        <h4>Add Members to Groups:</h4>
        <MemberSearch onChange={handleMemberChange} />
        <input
          type="submit"
          value="Create New Group"
          className="submit-button"
        />
      </form>
    </section>
  );
}
