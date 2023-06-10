import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import { Login } from "./pages/login/Login.js";
import { Register } from "./pages/Register/Register";

import "./styling/common/Common.css";

function App() {
  return (
    <div className="main-app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
