import './App.css';
import React from 'react';
import Main from './views/Main';
import Detail from './components/Detail';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
const App = () => {
    
  return(
<div>
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/home" default /> 
        <Route element={<Detail/>} path="/products/:id" />
      </Routes>
    </BrowserRouter>
      </div>
  ) 
}

export default App;
