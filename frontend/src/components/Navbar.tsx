import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed z-50 navbar lg:px-60 md:px-20 bg-base-100">
      <div className="flex-1">
        <Link
          to={"/"}
          className="text-3xl font-extrabold normal-case btn btn-ghost text-blue-950"
        >
          Daedalus
        </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 text-lg menu menu-horizontal text-blue-950">
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/rankings">Vote Rankings</Link>
          </li>
          <li>
            <Link to="sign-in">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
