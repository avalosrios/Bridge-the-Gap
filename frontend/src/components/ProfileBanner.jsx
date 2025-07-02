import "../styles/ProfileBanner.css";
import useUser from "../hooks/useUser.js";

export default function ProfileBanner() {
  const { user } = useUser();

  return (
    <div className="profile-banner">
      <h2>{`Hello ${user.username}!`}</h2>
    </div>
  );
}
