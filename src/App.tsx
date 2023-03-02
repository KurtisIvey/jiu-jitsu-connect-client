import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="bg-gray-50">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
