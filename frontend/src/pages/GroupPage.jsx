import { useParams, Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Groups from "../data/data";
import PostList from "../components/PostList";

function GroupPage() {

    const params = useParams();

    const group = Groups.find(group => group.id === +params.id)

    return(
        <>
            <Header />
            <h1>{group ? group.title : "Loading Data..."}</h1>
            <PostList posts={group ? group.posts : []}/>
            {

                //Post list
                //Calendar
                //Member List

            }


            <Link to='/'>Go Home</Link>
            <Footer />
        </>
    );
}

export default GroupPage;