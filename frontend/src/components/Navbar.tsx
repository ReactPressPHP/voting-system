import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { isAuthenticated, handleLogOut, user, avatar } = useAuth();
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
          <li>
            {isAuthenticated ? (
              <div className="px-2 py-0">
                <img src={avatar} className="inline rounded-[100%] w-8" />
                <span>{user}</span>
              </div>
            ) : (
              <NavLink
                to="sign-in"
                className={({ isActive }) =>
                  isActive ? "bg-accent text-white" : ""
                }
              >
                Login
              </NavLink>
            )}
          </li>
          {isAuthenticated && (
            <li>
              <button
                className="ml-5 text-white bg-accent"
                onClick={handleLogOut}
              >
                Log out
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
