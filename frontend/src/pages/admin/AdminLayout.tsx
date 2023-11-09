import { Outlet } from "react-router-dom";
import NavbarAdmin from "../../components/admin/NavbarAdmin";

export default function AdminLayout() {
  return (
    <>
      <NavbarAdmin />
      <Outlet />
    </>
  );
}
