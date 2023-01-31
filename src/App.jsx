import React, { useState } from "react";
import "./index.css";
import Todolist from "./Todolist";

const App = () => {
  const [inputlist, setinputlist] = useState("");
  const [inputtask, setinputtask] = useState([]);
  const inputevent = (e) => {
    e.preventDefault();
    setinputlist(e.target.value);
  };
  const listtask=()=>{
    setinputtask((inputtasks)=>{
        return [...inputtasks,inputlist];
    });
    setinputlist("");
  }
  const deletetasks=(id)=>
  {
      console.log('deleted');
      setinputtask((old_items)=>
      {
        return old_items.filter((arrelem,index)=>{
           return index!==id;
        });
      });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>To do list:</h1>
          <input
            type="text"
            placeholder="Enter any task"
            onChange={inputevent} value={inputlist}
          />
          <button onClick={listtask}>+</button>
          <ol>
            {inputtask.map((itemval,index)=>{return <Todolist text={itemval} key={index} id={index} onselect={deletetasks}/> })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
