import AuthLayout from "./pages/AuthLayout";
import SigninForm from "./pages/SigninForm";
import SignupForm from "./pages/SignupForm";
import { AuthProvider } from "./contexts/AuthContext";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* public Routes */}
          <Route element={<AuthLayout />}>
            <Route index element={<Landing />} />
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
