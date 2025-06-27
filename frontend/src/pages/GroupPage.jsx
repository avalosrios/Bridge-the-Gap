import { useParams, Link } from "react-router";
import Header from "../components/Header";
import PostList from "../components/PostList";
import MembersList from "../components/MembersList";
import Footer from "../components/Footer";

import "./GroupPage.css";

import Groups from "../data/data";

function GroupPage() {
  const params = useParams();

  const group = Groups.find((group) => group.id === +params.id);

  return (
    <main>
      <Header />
      <h2 className="group-title">{group ? group.title : "Loading Data..."}</h2>
      <Link to="/" className="back-button">
        {"<--"}
      </Link>
      <PostList posts={group ? group.posts : []} />
      <MembersList members={group ? group.members : []} />
      {
        //Calendar
        //Member List
      }
      <Footer />
    </main>
  );
}

export default GroupPage;
