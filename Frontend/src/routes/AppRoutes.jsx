import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../pages/Navbar";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import CreatePoll from "../pages/CreatePoll";
import MyPolls from "../pages/MyPolls";
import PollView from "../pages/PollView";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <div className="min-h-screen bg-transparent w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Remove horizontal padding so sections can be full width */}
      <div className="pt-6 md:pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreatePoll />} />
          <Route path="/mypolls" element={<MyPolls />} />
          <Route path="/poll/:id" element={<PollView />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRoutes;
