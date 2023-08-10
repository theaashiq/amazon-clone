//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { HomePage } from "./compounents";
import NavBar from "./compounents/NavBar";
import Checkout from "./compounents/Checkout";
import SearchResult from "./compounents/SearchResult";
import ProductPage from "./compounents/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
       <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/Search" element={<SearchResult/>}/>
            <Route path="/Product/:id" element={<ProductPage/>}/>
            <Route path="/Checkout" element={<Checkout/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
