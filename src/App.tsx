import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Weather from "./components/Weather";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";

import News from "./components/News";

function App() {
  return (
    <Router>
      <nav style={{ padding: 10, background: "#007bff", color: "white" }}>
        <Link to="/weather" style={{ marginRight: 10, color: "white" }}>
          Bài 1
        </Link>
        <Link to="/users" style={{ marginRight: 10, color: "white" }}>
          Bài 2
        </Link>
        <Link to="/news" style={{ color: "white" }}>
          Bài 3
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<h2 style={{ padding: 20 }}>Bài thực hành 02</h2>}
        />
        <Route path="/weather" element={<Weather />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}
export default App;
