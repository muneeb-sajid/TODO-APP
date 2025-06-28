import React, { useState } from "react";
import '../All/all.css';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi";

const All = (addtask) => {
    // Variable initializiation and declaratin
    const navigate = useNavigate();
   const tasks=JSON.parse(localStorage.getItem("tasks"));
   let complete = JSON.parse(localStorage.getItem("complete")) || [];
   // Function for updating the specific task
 const update_index = (index) => {
    const val=index;
    localStorage.setItem("index",val);
    navigate('/update');
};
 // Function for deleting the task
   const delete_index=(index) =>{
    alert ("Are you sure you want to delete task");
    console.log(tasks.splice(index,1));
    localStorage.setItem("tasks",JSON.stringify(tasks));
    window.location.reload();
   };
   // function for movinf task which are sompleted
   const completed= (index) =>{
    complete.push(tasks[index]);
    localStorage.setItem("complete",JSON.stringify(complete));
    delete_index(index);
   }  

   //speak functionality add
   const speak = (text,text2) => {
    const speaktitle = new SpeechSynthesisUtterance(text);
    speaktitle.lang = 'en-US'; 
    const speakdetail=new SpeechSynthesisUtterance(text2);
    speakdetail.lang='en-US';
    speechSynthesis.speak(speaktitle);
     speechSynthesis.speak(speakdetail);
};

    //function for naviagte to add component
    const handleClick = () => {  
        navigate('/add');
    };
    return (
        <>
            <button className="plus" onClick={handleClick}>+</button>
            <div  >
             {tasks && tasks.map((task, index) => (
              <div key={index} className="todo1">
              <div className="icons">
               <button className="btn" onClick={() => update_index(index)}><FaPencilAlt /></button>
               <button className="btn" onClick={() => delete_index(index)}><FaRegTrashAlt /></button>
              <button className="btn" onClick={() => completed(index)}><FaCheckCircle /></button>
              <button className="btn1" onClick={() => speak(task.title,task.detail)}><GiSpeaker /></button>
           </div>
  <h3 id="title">{task.title}</h3>
  <p id="detail">{task.detail}</p>
</div>

    ))}
            </div>
        </>
    );
};

export default All;
