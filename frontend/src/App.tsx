import Layout from "./pages/Layout";
import SigninForm from "./pages/SigninForm";
import { AuthContext } from "./contexts/AuthContext";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Events from "./pages/Events";
import EventsDetails from "./pages/EventsDetails";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminSignIn from "./pages/admin/AdminSignIn";
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminEventsCreate from "./pages/admin/AdminEventsCreate";

import AdminTeams from "./pages/admin/AdminTeams";
import AdminTeamsCreate from "./pages/admin/AdminTeamsCreate";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminUsersCreate from "./pages/admin/AdminUsersCreate";
import AdminUsersEdit from "./pages/admin/AdminUsersEdit";
import AdminEventsEdit from "./pages/admin/AdminEventsEdit";
import AdminTeamsEdit from "./pages/admin/AdminTeamsEdit";

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
            <Route path="/event-details/:id" element={<EventsDetails />} />
            <Route path="*" element={<p>404 Not Found</p>} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashBoard />}>
              <Route path="sign-in" element={<AdminSignIn />} />
              <Route path="events/records" element={<AdminEvents />} />
              <Route path="events/create" element={<AdminEventsCreate />} />
              <Route path="events/edit" element={<AdminEventsEdit />} />
              <Route path="teams/records" element={<AdminTeams />} />
              <Route path="teams/create" element={<AdminTeamsCreate />} />
              <Route path="teams/edit" element={<AdminTeamsEdit />} />
              <Route path="users/records" element={<AdminUsers />} />
              <Route path="users/create" element={<AdminUsersCreate />} />
              <Route path="users/edit" element={<AdminUsersEdit />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
