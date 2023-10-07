import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Nav from './components/nav';
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form';
import Payment from './components/Payment';
import Login from './components/login';
import  Signup from './components/signup';
/* 
alert('Welcome to Plant It'); */
function App() {
	
return (
   <div>
      <Router>
      <Nav/>
      <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/About" element ={<About/>}/>
            <Route path="/Form" element={<Form/>}/>
            <Route path="/Payment" element={<Payment/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </Router>
   </div>
);
};

export default App;





