import React, { useEffect, useState } from "react";
import '../Add/add.css';
import Navbar from "../Navbar/navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Route, Routes, useNavigate } from "react-router-dom";



const Add = ({setShowNavbar}) =>{
   const [title,setTitle] =useState('');
   const [detail,setDetail] =useState('');
   

    useEffect(() => {
    setShowNavbar(false);
    return () => {
      setShowNavbar(true);
    };
  }, [setShowNavbar]);

     const navigateToAll =useNavigate();
     const navigate =() =>{
    navigateToAll('/');
     }
       const handleAdd = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ title, detail });
        localStorage.setItem("tasks", JSON.stringify(tasks));

      navigateToAll('/');

}



    return (
        <>
        
         <div className="navbar">
          <ul>
            <li id="arrow" onClick={navigate}><IoMdArrowRoundBack /></li>
            <li className="add">Add Task</li>
          </ul>
         </div>
         <div className="form">
         <input type="text" className="fname" value={title} onChange={(e) => setTitle(e.target.value)} autoComplete="off" placeholder="Title" />
         <input type="text" className="fname" value={detail} onChange={(e) => setDetail(e.target.value)} autoComplete="off" placeholder="Detail" />
         <button className="add_btn" onClick={handleAdd}>ADD</button>
         </div>

        </>
    )
}
export default Add;