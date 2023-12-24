import React from "react";
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
