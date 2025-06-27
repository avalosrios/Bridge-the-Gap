import "./HomePage.css";
import { useState, useEffect } from "react";
import { httpRequest } from "../utils/utils";
import Header from "../components/Header";
import Navagation from "../components/Navagation";
import HomeDetails from "../components/HomeDetails";
import GroupModal from "../components/GroupModal";
import GroupList from "../components/GroupList";
import Footer from "../components/Footer";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function HomePage() {
  const [groups, setGroups] = useState([]);
  const [modalDisplay, setModalDisplay] = useState("modal-hidden");

  useEffect(() => {
    const GROUP_URL = new URL("groups", BASE_URL);
    httpRequest(GROUP_URL, "GET").then((groupList) => {
      setGroups(groupList);
    });
  }, []);

  const createGroup = async (groupData) => {
    const GROUP_URL = new URL("groups", BASE_URL);
    const newGroup = await httpRequest(GROUP_URL, "POST", groupData);
    setGroups([...groups, newGroup]);
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
      <div className="search-form">
        <Navagation />
      </div>
      <div className="home-content">
        <HomeDetails />
        <GroupList groups={groups} onOpen={openModal} />
      </div>
      <Footer />
      <GroupModal
        displayMode={modalDisplay}
        onClose={closeModal}
        onCreate={createGroup}
      />
    </main>
  );
}

export default HomePage;
