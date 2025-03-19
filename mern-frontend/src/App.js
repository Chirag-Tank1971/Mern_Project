import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Agents from "./pages/Agents";
import UploadCSV from "./pages/UploadCSV";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/upload" element={<UploadCSV />} />
        <Route path="/tasks/:agentId" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;
