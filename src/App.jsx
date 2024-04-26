import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import { Home } from './home';
import {Cadastro} from './cadastro';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} />        
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}
export default App;