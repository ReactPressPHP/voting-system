import Layout from "./pages/Layout";
import SigninForm from "./pages/SigninForm";
import SignupForm from "./pages/SignupForm";
import { AuthProvider } from "./contexts/AuthContext";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* public Routes */}
          <Route element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="/sign-in" element={<SigninForm />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <p>Dashboard</p>
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
