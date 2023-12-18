import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./Add.tsx";
import Home from "./Home.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
