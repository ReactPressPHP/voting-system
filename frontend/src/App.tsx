import Layout from "./pages/Layout";
import SigninForm from "./pages/SigninForm";
import SignupForm from "./pages/SignupForm";
import { AuthContext } from "./contexts/AuthContext";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";

function App() {
  const [data, setData] = useLocalStorage("discordChuChu", "");

  return (
    <AuthContext.Provider value={data}>
      <BrowserRouter>
        <Routes>
          {/* public Routes */}
          <Route element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/dashboard" element={<p>Dashboard</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
