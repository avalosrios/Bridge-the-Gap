export default function MemberCard({ member }) {
  return (
    <div className="member-card">
      <img src={member.profile_img} alt="Profile Pic" />
      <p>{member.name}</p>
    </div>
  );
}
