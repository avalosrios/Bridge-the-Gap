import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { httpRequest } from "../utils/utils";
import Header from "../components/Header";
import PostList from "../components/PostList";
import MembersList from "../components/MembersList";
import Footer from "../components/Footer";

import "./GroupPage.css";
const BASE_URL = import.meta.env.VITE_BASE_URL;


function GroupPage() {
  const params = useParams();

  const [group, setGroup] = useState({});

  useEffect(() => {
    const GROUP_URL = new URL(`groups/${params.id}`, BASE_URL);
    httpRequest(GROUP_URL, 'GET').then(group => {setGroup(group)});
  },[])

  return (
    <main>
      <Header />
      <h2 className="group-title">{group ? group.name : "Loading Data..."}</h2>
      <Link to="/" className="back-button">
        {"<--"}
      </Link>
      <PostList posts={group ? group.posts : []} />
      <MembersList members={group ? group.members : []} />
      {
        //Calendar
      }
      <Footer />
    </main>
  );
}

export default GroupPage;
