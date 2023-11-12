import { Link, NavLink } from "react-router-dom";
import useLocalStorage from "use-local-storage";

export default function Navbar() {
  const [data] = useLocalStorage("discordChuChu", "");
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
              to="/"
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
            <li>
              <button
                onClick={() => {
                  localStorage.setItem("discordChuChu", "");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink to="sign-in">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
