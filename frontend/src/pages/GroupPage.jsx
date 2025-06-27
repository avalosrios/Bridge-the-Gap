import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { httpRequest } from "../utils/utils";
import Header from "../components/Header";
import PostList from "../components/PostList";
import PostModal from "../components/PostModal";
import MembersList from "../components/MembersList";
import Footer from "../components/Footer";

import "./GroupPage.css";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function GroupPage() {
  const params = useParams();

  const [group, setGroup] = useState({});
  const [modalDisplay, setModalDisplay] = useState("modal-hidden");

  useEffect(() => {
    const GROUP_URL = new URL(`groups/${params.id}`, BASE_URL);
    httpRequest(GROUP_URL, "GET").then((group) => {
      setGroup(group);
    });
  }, []);

  const createPost = async (postData) => {
    const POST_URL = new URL(`groups/${params.id}/posts`, BASE_URL);
    const newPost = await httpRequest(POST_URL, "POST", postData);
    setGroup({
      ...group,
      posts: [...group.posts, newPost],
    });
  };

  const openModal = () => {
    setModalDisplay("modal-display");
  };

  const closeModal = () => {
    setModalDisplay("modal-hidden");
  };

  return (
    <main>
      <Header />
      <h2 className="group-title">{group ? group.name : "Loading Data..."}</h2>
      <Link to="/" className="back-button">
        {"<--"}
      </Link>
      <PostList posts={group ? group.posts : []} onOpen={openModal} />
      <PostModal
        onPost={createPost}
        displayMode={modalDisplay}
        onClose={closeModal}
      />
      <MembersList members={group ? group.members : []} />
      {
        //Calendar
      }
      <Footer />
    </main>
  );
}

export default GroupPage;
