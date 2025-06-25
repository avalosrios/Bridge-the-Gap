import './ProfilePage.css'
import { Link } from 'react-router';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileBanner from '../components/ProfileBanner';
import MemberIcon from '../components/MemberIcon'

const defaultMember = {
    name: "user",
    profile_img: "/default_profile_pic.jpg"
}

function ProfilePage() {
    return (
        <div>
        <Header />
        <ProfileBanner />
        <Link to='/' className="back-button">{'<--'}</Link>
        <MemberIcon member={defaultMember} className="member-icon"/>
        {
            //Profile info
        }
        <Footer />
        </div>  
    );
}

export default ProfilePage