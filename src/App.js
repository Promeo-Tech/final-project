import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';

import Navbar from './components/navbar/navbar';
import Header from './components/Header/header';
import AboutUs from './components/about-us/aboutUs';
import Gallery from './components/Gallery/gallery';
import Drinks from './components/MakeDrink/table';



const App = () => (
  <div>
   <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Header/>}></Route>

         <Route path='/about-us' element={<AboutUs/>}></Route>

        <Route path='/gallery' element={<Gallery/>}></Route>

        <Route path='/create-drink' element={<Drinks/>}></Route>

      </Routes>
    </BrowserRouter>
  </div>
);

export default App;