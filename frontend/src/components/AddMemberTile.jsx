import '../styles/AddMemberTile.css'

export default function AddMemberTile({ member, onClick }) {
    return (
        <div className='member-tile' onClick={() => onClick(member)}>
            <p>{member.username}</p>
        </div>
    );
}