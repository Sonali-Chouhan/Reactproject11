import React from 'react';
import Profile from './Component/Profile';
import Home from "./Component/Home";
import About from './Component/About';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserTable from './Component/User-Table';
//require('dotenv').config()
function App() {
  
  return (
    <div className="App">
      <h1>hello</h1>
      <p>hello{process.env.REACT_APP_TOKEN}</p>
    {/* <Router>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="user-table" element={<UserTable/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </Router> */}
    
    </div>
  );
}

export default App;
