import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
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
        <ul className="px-1 text-md menu menu-horizontal text-blue-950">
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
            <NavLink
              to="sign-in"
              className={({ isActive }) =>
                isActive ? "bg-accent text-white" : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
