import "../styles/Header.css";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { httpRequest } from "../utils/utils.js";

const LOGOUT_URL = "/api/auth/logout";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (await httpRequest(LOGOUT_URL, "POST")) {
      navigate("/login");
      console.log("Logout Success");
    }
  };

  return (
    <header>
      <div className="logo">
        <h1>Bridge the Gap</h1>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Log Out
      </button>
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
