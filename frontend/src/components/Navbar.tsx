import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
import useLocalStorage from "use-local-storage";

export default function Navbar() {
  const [data] = useLocalStorage("discordChuChu", "");
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="fixed z-50 navbar lg:px-60 md:px-20 bg-base-100">
      <div className="flex-1">
        <Link
          to={"/"}
          className="text-2xl font-extrabold normal-case btn btn-ghost text-blue-950"
        >
          Daedalus
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex items-center px-1 text-md menu menu-horizontal text-blue-950">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "bg-accent text-white" : ""
              }
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rankings"
              className={({ isActive }) =>
                isActive ? "bg-accent text-white" : ""
              }
            >
              Vote Rankings
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="sign-in"
              className={({ isActive }) =>
                isActive ? "bg-accent text-white" : ""
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <button className="ml-5 text-white bg-accent">Log out</button>
          </li> */}

          {data ? (
            <button
              onClick={() => {
                localStorage.setItem("discordChuChu", "");
                window.location.reload();
              }}
            >
              LOG OUT
            </button>
          ) : (
            <NavLink
              to="sign-in"
              className={({ isActive }) =>
                isActive ? "bg-accent text-white" : ""
              }
            >
              LOGIN
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
}
