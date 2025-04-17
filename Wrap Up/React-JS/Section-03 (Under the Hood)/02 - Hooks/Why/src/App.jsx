import React from "react";
import "./App.css";

function App() {
  let score = 0;

  function add() {
    score += 1;
    console.log(score);
  }

  function sub() {
    score -= 1;
    console.log(score);
  }

  return (
    <>
      <p>
        Current Value : <span>{score}</span>
      </p>
      <button onClick={add}>Up</button>
      <br />
      <br />
      <button onClick={sub}>Down</button>
    </>
  );
}

export default App;

//Here, The state(variable) will not reflecting on UI. Because, React has the power to control and display the changes.

//Let's understand it using other components. Let's have a look on Component section.
