import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <Navbar />
          <section>
            <Outlet />
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default AuthLayout;
