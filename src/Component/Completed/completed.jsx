import React from "react";
const Completed = () =>{
    //Gettig the completed object of array from local storage to show in complete
    let complete= JSON.parse(localStorage.getItem("complete"));
    
    return(
        <>
        <div>
             <div >
             {complete && complete.map((task, index) => (
              <div key={index} className="todo1">
             <h3>{task.title}</h3>
             <p>{task.detail}</p>
             
             </div>
    ))}
            </div>
        </div>
        </>
    )
}
export default Completed;