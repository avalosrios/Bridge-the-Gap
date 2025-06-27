export default function MemberCard({ member }) {
  return (
    <div className="member-card">
      <img src={member.photo} alt="Profile Pic" />
      <p>{member.username}</p>
    </div>
  );
}
