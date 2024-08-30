import { createContext } from "react";
import { useContext } from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export default UserContext;
