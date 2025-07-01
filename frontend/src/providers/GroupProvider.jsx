import { createContext, useState } from "react";

const groupContext = createContext();

function GroupProvider(props) {
  const [groups, setGroups] = useState([]);

  return (
    <groupContext.Provider value={{ groups, setGroups }}>
      {props.children}
    </groupContext.Provider>
  );
}

export { groupContext, GroupProvider };
