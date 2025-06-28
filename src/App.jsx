import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/navbar';
import Completed from './Component/Completed/completed';
import Add from './Component/Add/add';
import All from './Component/All/All';
import Update from './Component/Update/update';

function App() {

  // This is passed as prob to children to hide navbar like in add component and update component
  //uses the use effect and then rreseit it so it can show again
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <>   

    
    {showNavbar && <Navbar/>}
    <Routes>
  
        <Route path="/add" element={<Add setShowNavbar={setShowNavbar}/>}/>
       <Route path='/' element={<All/>}/>
        <Route path="/completed" element={<Completed/>} />
        <Route path='/update' element={<Update setShowNavbar={setShowNavbar}/>}/>
        
        
    </Routes>
    </>

  );
}

export default App;
