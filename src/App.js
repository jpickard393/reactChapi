import React from 'react';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyNumberSearchForm from './Components/CompanyNumberSearchForm';
import AdvancedSearchForm from './Components/AdvancedSearchForm/AdvancedSearchForm';

function App() {
  return (
    <Router>
    <div className="App">
        <NavBar/>      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/CompanyNumberSearchForm" element={<CompanyNumberSearchForm />}></Route>
          <Route path="/AdvancedSearchForm" element={<AdvancedSearchForm />}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
