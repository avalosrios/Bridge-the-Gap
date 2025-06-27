import "../styles/MemberIcon.css";

export default function MemberIcon({ member }) {
  return (
    <div className="member-icon">
      <img src={member.photo} alt="Profile Picture" className="member-img" />
      <h3 className="member-name">{member.username}</h3>
    </div>
  );
}
