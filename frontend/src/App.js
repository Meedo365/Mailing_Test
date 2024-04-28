import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./assets/css/style.css";
import Home from './pages/Home';
import Login from "./pages/Login";
import Message from "./pages/Message";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;
