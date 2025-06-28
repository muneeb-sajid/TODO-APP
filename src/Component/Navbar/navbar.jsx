import React from "react";
import '../Navbar/navbar.css';
import { Link } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { IoCheckmarkDone } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";


const Navbar =() =>{
    //getting date function
    let date=new Date();
    const d=date.getDate();
    
    return (
        <>
        <nav>
        <div className="list">
            <ul>
                <li className="todo">todo app</li>
                 <li className="ticks"><Link to="/"><MdMenuOpen /> ALL  </Link></li>
                <li className="ticks"><Link to="/completed"><IoCheckmarkDone />  Completed</Link></li>
                <li className="calendar"> {d} </li>
            </ul>
        </div>
        </nav>
        </>
    )
}
export default Navbar;