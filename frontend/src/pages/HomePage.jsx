import "./HomePage.css";
import { useState, useCallback, useContext } from "react";
import { httpRequest } from "../utils/utils";
import Header from "../components/Header";
import Navagation from "../components/Navagation";
import HomeDetails from "../components/HomeDetails";
import GroupModal from "../components/GroupModal";
import GroupList from "../components/GroupList";
import Footer from "../components/Footer";
import { groupContext } from "../providers/GroupProvider";

const GROUP_URL = "/api/groups";

function useCreateGroup() {
  const [isLoading, setIsLoading] = useState(true);
  const { groups, setGroups } = useContext(groupContext);
  const create = useCallback(
    (groupData) => {
      httpRequest(GROUP_URL, "POST", groupData)
        .then(() => {
          //Use context to update group UI
          setGroups([...groups, groupData]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [groups, setGroups],
  );

  return [create, isLoading];
}

function HomePage() {
  const [modalDisplay, setModalDisplay] = useState("modal-hidden");
  const [createGroup] = useCreateGroup();

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
        <GroupList onOpen={openModal} />
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
