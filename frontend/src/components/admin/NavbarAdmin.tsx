import { Link } from "react-router-dom";

export default function NavbarAdmin() {
  return (
    <>
      <div className="navbar bg-accent sticky top-0 z-[1000]">
        <div className="flex-none">
          <label htmlFor="main-drawer" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1">
          <Link
            to="admin/dashboard"
            className="text-sm normal-case btn btn-ghost"
          >
            Admin Dashboard
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1 cursor-pointer avatar">
              <div className="w-12 rounded-full">
                <img
                  src="https://play-lh.googleusercontent.com/EotxkWC4dXajaesh2iVgdIB5-o6pINoas_k-z7nVjRGSu4k9QZwMZIcRNXyUWGn3rg"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="drawer z-[1001]">
        <input id="main-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor="main-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="mb-3">
              <p className="text-secondary">Events</p>
              <li>
                <Link to="admin/dashboard/events">Records</Link>
              </li>
              <li>
                <Link to="admin/dashboard/events/create">Create New</Link>
              </li>
              <li>
                <a>Trash Bin</a> {/*Tentative*/}
              </li>
            </div>
            <div className="mb-3">
              <p className="text-secondary">Teams</p>
              <li>
                <Link to="admin/dashboard/teams">Records</Link>
              </li>
              <li>
                <Link to="admin/dashboard/teams/create">Create New</Link>
              </li>
              <li>
                <a>Trash Bin</a> {/*Tentative*/}
              </li>
            </div>
            <div className="mb-3">
              <p className="text-secondary">Users</p>
              <li>
                <Link to="admin/dashboard/users">Records</Link>
              </li>
              <li>
                <Link to="admin/dashboard/users/create">Create New</Link>
              </li>
              <li>
                <a>Trash Bin</a> {/*Tentative*/}
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
