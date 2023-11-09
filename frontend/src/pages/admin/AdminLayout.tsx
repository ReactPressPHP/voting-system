import { Outlet, useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [data] = useLocalStorage<{ id: string }>("discordChuChu", { id: "" });
  useEffect(() => {
    if (!data) navigate("admin/sign-in");
  }, [data, navigate]);
  return (
    <>
      {data && <NavbarAdmin />}
      <Outlet />
    </>
  );
}
