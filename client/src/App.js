import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import ProfilePage from "./components/pages/profile";
import GamesPage from "./components/pages/games";
import ForumsPage from "./components/pages/forums";
import Messages from "./components/pages/messages";
import ChatApp from "./components/pages/ChatApp"; // Import ChatApp component
import EventsPage from "./components/pages/events";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/forums" element={<ForumsPage />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/events" element={<EventsPage />} />

        {/* ChatApp Route */}
        <Route path="/chat" element={<ChatApp userEmail="user@example.com" />} />
      </Routes>
    </Router>
  );
}

export default App;
