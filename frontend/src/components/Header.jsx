import "../styles/Header.css";
import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Bridge the Gap</h1>
      </div>
      <div className="profile-icon">
        <Link to="/profile" className="profile-link"></Link>
        <img
          src="/default_profile_pic.jpg"
          alt="Profile Phot"
          className="profile-photo"
        />
      </div>
    </header>
  );
}
