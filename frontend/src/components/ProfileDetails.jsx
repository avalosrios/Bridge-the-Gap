import "../styles/ProfileDetails.css";
import useUser from "../hooks/useUser.js";
import { useState } from "react";

export default function ProfileDetails({ onUpdate }) {
  const { user } = useUser();
  const [newUser, setNewUser] = useState({
    username: user.username,
    photo: user.photo,
    location: user.location,
    email: user.email,
  });

  const handleInputChange = (evt) => {
    setNewUser({
      ...newUser,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div className="profile-details">
      <h3>User Information</h3>
      <h5>Name</h5>
      <input
        type="text"
        name="username"
        value={newUser.username}
        placeholder="Enter Name..."
        onChange={handleInputChange}
      />{" "}
      <br />
      <h5>Profile Image</h5>
      <input
        type="text"
        name="photo"
        value={newUser.photo}
        placeholder="Enter Image Path..."
        onChange={handleInputChange}
      />{" "}
      <br />
      <h5>Location</h5>
      <input
        type="text"
        name="location"
        value={newUser.location}
        placeholder="Enter Location..."
        onChange={handleInputChange}
      />{" "}
      <br />
      <h5>Email</h5>
      <input
        type="text"
        name="email"
        value={newUser.email}
        placeholder="Enter Email..."
        onChange={handleInputChange}
      />{" "}
      <br />
      <button onClick={() => onUpdate(newUser)}>Save Changes</button>
    </div>
  );
}
