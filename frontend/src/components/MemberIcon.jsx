import "../styles/MemberIcon.css";

export default function MemberIcon({ member }) {
  return (
    <div className="member-icon">
      <img
        src={member.profile_img}
        alt="Profile Picture"
        className="member-img"
      />
      <h3 className="member-name">{member.name}</h3>
    </div>
  );
}
