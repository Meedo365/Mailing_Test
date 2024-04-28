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
import { useState } from "react";
import { Toast } from "flowbite-react";
import { HiX } from "react-icons/hi";
import NotFound from "./pages/NotFound";

function App() {
  let [error, setError] = useState("");
  const UploadRouteGuard = ({ element }) => {
    if (
      !localStorage.getItem("inbox") ||
      localStorage.getItem("inbox") === "undefined"
    ) {
      setError(
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">
            Access denied. Please login.
          </div>
          <Toast.Toggle />
        </Toast>
      );
      return <Navigate to="/" />;
    }
    return element;
  };
  return (
    <StoreContext>
      <Router>
        <Routes>
          <Route path="/" element={<Login error={error} />} />
          <Route
            path="/home"
            element={<UploadRouteGuard element={<Home />} />}
          />
          <Route
            path="/message/:id"
            element={<UploadRouteGuard element={<Message />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </StoreContext>
  );
}

export default App;
