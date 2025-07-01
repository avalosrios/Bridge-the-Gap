import "./HomePage.css";
import { useCallback, useState } from "react";
import { httpRequest } from "../utils/utils";
import Header from "../components/Header";
import Navagation from "../components/Navagation";
import HomeDetails from "../components/HomeDetails";
import GroupModal from "../components/GroupModal";
import GroupList from "../components/GroupList";
import Footer from "../components/Footer";

const GROUP_URL = "/api/group";

function useCreateGroup(groupData) {
  const [isLoading, setIsLoading] = useState(true);
  const create = useCallback(() => {
    httpRequest(GROUP_URL, "POST", groupData)
      .then((group) => {
        // TODO: Do something here
        console.log(group);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
