import '../styles/MemberIcon.css'

export default function MemberIcon({ member }) {
    return (
        <div className='member-icon'>
            <img src={member.profile_img} alt="Profile Picture" className='member-img'/>
            <h4 className='member-name'>{member.name}</h4>
        </div>
    );
}