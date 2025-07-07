import "../styles/AddMemberTile.css";

export default function AddMemberTile({ member, onClick, className }) {
  return (
    <div
      className={`${className} ${`member-tile`}`}
      onClick={() => onClick(member)}
    >
      <p>{member.username}</p>
    </div>
  );
}
