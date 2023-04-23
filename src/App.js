import React, { createContext, useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import Models from "./pages/models/models";

function App() {
  return (
    // <BrowserRouter>
    //       <Routes>
    //         <Route path="/" element={<Dashboard />} />
    //         <Route path="/student-details" element={<StudentDetails />} />
    //         <Route path="/company-details" element={<CompanyDetails />} />
    //         <Route path="/applications" element={<Applications />} />
    //         <Route path="/add-user" element={<AddUser />} />
    //       </Routes>
    // </BrowserRouter>
    <div className="App">
      {/* <Dashboard />     */}
      <Models />
    </div>
  );
}

export default App;
