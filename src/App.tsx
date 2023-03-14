import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import FriendRequests from "./pages/FriendRequests";
import Friends from "./pages/Friends";

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
          <Route path="/friend-requests" element={<FriendRequests />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
