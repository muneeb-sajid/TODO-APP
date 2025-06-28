import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

 const Update = ({setShowNavbar}) =>{
     const [title,setTitle] =useState('');
    const [detail,setDetail] =useState('');

     useEffect(() => {
        setShowNavbar(false);
        return () => {
          setShowNavbar(true);
        };
      }, [setShowNavbar]);
    
const task=JSON.parse(localStorage.getItem("tasks"));
const index=localStorage.getItem("index");

const Title=task[index].title;
const Detail=task[index].detail;


const naviagteToAll = useNavigate();
const navigate = () =>{
    naviagteToAll('/');
}
const handleAdd = () =>{
    alert ("Are you sure you can to update");
    task[index].title=title;
    task[index].detail=detail;
    localStorage.setItem("tasks",JSON.stringify(task));
    naviagteToAll('/');
}


    return(
        <>
        <div className="navbar">
                  <ul>
                    <li id="arrow" onClick={navigate}><IoMdArrowRoundBack /></li>
                    <li className="add">Add Task</li>
                  </ul>
                 </div>
                 <div className="form">
                 <input type="text" className="fname" value={title} onChange={(e) => setTitle(e.target.value)} autoComplete="off" placeholder={Title} />
                 <input type="text" className="fname" value={detail} onChange={(e) => setDetail(e.target.value)} autoComplete="off" placeholder={Detail} />
                 <button className="add_btn" onClick={handleAdd}>ADD</button>
                 </div>
        </>
    )
 }
 export default Update;