import './ProfilePage.css'
import { Link } from 'react-router';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileBanner from '../components/ProfileBanner';
import MemberIcon from '../components/MemberIcon'
import ProfileDetails from '../components/ProfileDetails';

const defaultMember = {
    name: "user",
    profile_img: "/default_profile_pic.jpg",
    location: "Menlo Park, CA",
    email: "user@gmail.com"

}

function ProfilePage() {
    return (
        <div>
        <Header />
        <ProfileBanner />
        <Link to='/' className="back-button">{'<--'}</Link>
        <div className='profile-information'>
            <MemberIcon member={defaultMember} className="member-icon"/>
            <ProfileDetails user={defaultMember}/>
        </div>
        <Footer />
        </div>  
    );
}

export default ProfilePage