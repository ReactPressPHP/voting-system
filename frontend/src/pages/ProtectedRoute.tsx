import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [data] = useLocalStorage<{ id: string }>("discordChuChu", { id: "" });
  useEffect(() => {
    if (!data) navigate("/");
  }, [data, navigate]);
  return data ? children : null;
}
