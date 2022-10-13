import "./App.css";
import Header from "./Components/header/Header";
import Employees from "./Components/employees/employees";
import Buttons from "./Components/buttons/Buttons";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleChange = ({ target })=> {
    if(target.value ==="Next") {
      console.log(counter)

      if(counter < 15){
        setCounter(prevCount => prevCount + 5)
      }else{
        setCounter(0)
      }
 
    }else if(target.value ==="Prev"){
      if(counter >0) {
        setCounter(prevCount => prevCount - 5)
      }else{
        setCounter(15)
      }
 

    }
  };


  return (
    <div className="App">
      <div className="container">
        <Header counter={counter}/>
        <Employees count={counter}/>
        <Buttons func={handleChange}/>
      </div>
    </div>
  );
}

export default App;
