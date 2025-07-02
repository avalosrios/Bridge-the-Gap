import { useContext } from "react";
import { groupContext } from "../providers/GroupProvider";

export default function useGroups() {
  const { groups } = useContext(groupContext);
  return groups;
}
