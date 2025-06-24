import '../styles/Header.css'

export default function Header() {
    return(
        <header>
            <img src="/logo.png" alt="Logo" className='logo'/>
            <img src="/default_profile_pic.jpg" alt="Profile Phot" className='profile-photo'/>
        </header>
    );
}