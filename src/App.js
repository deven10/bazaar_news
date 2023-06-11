import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// pages
import { Login } from "./pages/login/Login.js";
import { Register } from "./pages/Register/Register";
import { LandingPage } from "./pages/Landing Page/LandingPage";
import { Home } from "./pages/Home/Home";
import { TokenRoutes } from "./components/private-routes/TokenRoutes";

import "./styling/common/Common.css";
import "animate.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="main-app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<TokenRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
