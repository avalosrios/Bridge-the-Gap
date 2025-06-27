import "./HomePage.css";
import { useState, useEffect } from "react";
import { httpRequest } from "../utils/utils";
import Header from "../components/Header";
import Navagation from "../components/Navagation";
import HomeDetails from "../components/HomeDetails";
import GroupList from "../components/GroupList";
import Footer from "../components/Footer";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function HomePage() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const GROUP_URL = new URL("groups", BASE_URL);
    httpRequest(GROUP_URL, "GET").then((groupList) => {
      setGroups(groupList);
    });
  }, []);

  return (
    <main>
      <Header />
      <div className="search-form">
        <Navagation />
      </div>
      <div className="home-content">
        <HomeDetails />
        <GroupList groups={groups} />
      </div>
      <Footer />
    </main>
  );
}

export default HomePage;
