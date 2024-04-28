import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./assets/css/style.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Message from "./pages/Message";
import StoreContext from "./context/store";

function App() {
  const UploadRouteGuard = ({ element }) => {
    if (
      !localStorage.getItem("inbox") ||
      localStorage.getItem("inbox") === "undefined"
    ) {
      alert("Access denied. Please login.");
      return <Navigate to="/" />;
    }
    return element;
  };
  return (
    <StoreContext>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={<UploadRouteGuard element={<Home />} />}
          />
          <Route
            path="/message"
            element={<UploadRouteGuard element={<Message />} />}
          />
        </Routes>
      </Router>
    </StoreContext>
  );
}

export default App;
