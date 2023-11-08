import { createContext, useContext } from "react";

const AuthContext = createContext("");

const authStatus = {
  user: "",
  avatar: "",
  isAuthenticated: false,
};

export { AuthContext };
