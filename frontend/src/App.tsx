import Layout from "./pages/Layout";
import SigninForm from "./pages/SigninForm";
import { AuthContext } from "./contexts/AuthContext";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Events from "./pages/Events";
import EventsDetails from "./pages/EventsDetails";

function App() {
  const [data] = useLocalStorage("discordChuChu", "");

  return (
    <AuthContext.Provider value={data}>
      <BrowserRouter>
        <Routes>
          {/* public Routes */}
          <Route element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event-details" element={<EventsDetails />} />
            <Route path="/dashboard" element={<p>Dashboard</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
