import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import FriendRequests from "./pages/FriendRequests";
import Friends from "./pages/Friends";
import PrivateRoutes from "./utils/PrivateRoutes";
import LoggedInRedirect from "./utils/LoggedInRedirect";
import Contact from "./pages/Contact";
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    <div className="bg-[#f5f3f3] font-roboto min-h-screen ">
      <BrowserRouter>
        <Routes>
          {/* Only accessible w/o auth */}
          <Route element={<LoggedInRedirect />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          {/* protected routes that require login */}
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friend-requests" element={<FriendRequests />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
