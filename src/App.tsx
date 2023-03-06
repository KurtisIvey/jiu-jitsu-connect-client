import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="bg-[#f5f3f3] font-roboto min-h-screen ">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/profile/:profileId" element={<Profile />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
