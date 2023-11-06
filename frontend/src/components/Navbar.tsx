import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="  navbar lg:px-60 md:px-20 fixed bg-base-100 z-50">
      <div className="flex-1">
        <a className="text-3xl font-extrabold normal-case btn btn-ghost">
          Daedalus
        </a>
      </div>
      <div className="flex-none">
        <ul className="px-1 text-lg menu menu-horizontal">
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
