import '../styles/Header.css'

export default function Header() {
    return(
        <header>
            <div className='logo'>
                <h1>Bridge the Gap</h1>
            </div>
            <img src="/default_profile_pic.jpg" alt="Profile Phot" className='profile-photo'/>
        </header>
    );
}