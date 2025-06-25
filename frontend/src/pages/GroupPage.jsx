import { useParams, Link } from "react-router";
import Header from "../components/Header";
import PostList from "../components/PostList";
import MembersList from "../components/MembersList";
import Footer from "../components/Footer";

import './GroupPage.css'

import Groups from "../data/data";

function GroupPage() {

    const params = useParams();

    const group = Groups.find(group => group.id === +params.id)

    return(
        <>
            <Header />
            <h1>{group ? group.title : "Loading Data..."}</h1>
            <Link to='/' className="back-button">{'<--'}</Link>
            <PostList posts={group ? group.posts : []}/>
            <MembersList members={group ? group.members : []} />
            {

                //Calendar
                //Member List

            }
            <Footer />
        </>
    );
}

export default GroupPage;