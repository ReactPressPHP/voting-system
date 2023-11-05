import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = () => {
  const isAuthenticated = false;
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
