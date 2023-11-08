import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";

const AuthContext = createContext();

const authStatus = {
  user: "",
  avatar: "",
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN": //placeholder values
      return {
        ...state,
        user: "andite",
        avatar:
          "https://cdn.discordapp.com/avatars/316475410605015041/c782f5556c1c3d7a5a8eda82ba334a90.png",
        isAuthenticated: true,
      };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
  }
}
function AuthProvider({ children }) {
  const [{ user, avatar, isAuthenticated }, dispatch] = useReducer(
    reducer,
    authStatus
  );

  const [code, setCode] = useState("");

  function handleLogin() {
    dispatch({ type: "LOGIN" });
  }

  function handleLogOut() {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        avatar,
        isAuthenticated,
        dispatch,
        handleLogin,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext is used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
