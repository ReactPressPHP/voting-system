import { useNavigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  const navigate = useNavigate();
  // TODO:
  // make non-admin users unable to enter admin authorized pages

  // useEffect(() => {
  //   if (!admin) navigate("/");
  // }, [admin, navigate]);
  // return admin ? children : null;

  return children;
}
