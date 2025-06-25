import '../styles/ProfileDetails.css'

export default function ProfileDetails({ user }) {
    return (
        <div className='profile-details'>
            <h3>User Information</h3>
            <input type="text" value={user.name}/>        <br />
            <input type="text" value={user.profile_img}/> <br />
            <input type="text" value={user.location}/>    <br />
            <input type="text" value={user.email}/>       <br />
        </div>
    );
}