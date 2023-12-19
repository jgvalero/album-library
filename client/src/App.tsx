import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./Add.tsx";
import Home from "./Home.tsx";
import AlbumDetails from "./AlbumDetails.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/album/:id" element={<AlbumDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
