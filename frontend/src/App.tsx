import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
