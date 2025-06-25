import '../styles/ProfileDetails.css'

export default function ProfileDetails({ user }) {
    return (
        <div className='profile-details'>
            <p><strong>Username: </strong>{user.name}</p>
            <p><strong>Profile Photo: </strong>{user.profile_img}</p>
            <p><strong>Location: </strong>{user.location}</p>
            <p><strong>Email: </strong>{user.email}</p>
        </div>
    );
}