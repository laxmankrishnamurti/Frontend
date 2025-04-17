import { useState } from "react"

function App() {

  let [count, setCount] = useState(5);
  console.log(count);

  function add() {
    count += 1;
    // setCount(count);
    // setCount(count);
    // setCount(count);
    // setCount(count);
    // setCount(count);

    setCount((previousCount) => previousCount + 1);
    setCount((previousCount) => previousCount + 1);
    setCount((previousCount) => previousCount + 1);
    setCount((previousCount) => previousCount + 1);
    setCount((previousCount) => previousCount + 1);   //State will change by 5.
  }

  function sub() {
    count -= 1;
    // setCount(count);
    // setCount(count);
    // setCount(count);
    // setCount(count);
    // setCount(count);

    setCount((previousCount) => previousCount - 1);
    setCount((previousCount) => previousCount - 1);
    setCount((previousCount) => previousCount - 1);   //State will reduce by 5.
  }

  return (
    <>
      <div>
        <p>Current Value : {count}</p>
        <p>Current Value : {count}</p>
        <p>Current Value : {count}</p>
        <button onClick={add}>Add : {count}</button>
        <button onClick={sub}>Subtract : {count}</button>
      </div>
    </>
  )
}

export default App


//Q :: let we call setCount 5 times then what's the value of count state? See Above code for more clearance.

//ans :- Not, The count value only exceed by 1. Because, the userState() creates only one batch for equal action. Hence, there is only one action is repeating multiple times so useState() only considered it at once. 

//But, if we want to update the state by 5(in this case) then we can do this.

// setCount((previousCount) => previousCount + 1); (here, we assigning a callback function that takes previous count value and return it to the next setCount() function and it goes further.... And after that the state will change by 5.)

// setCount() is a function so it accept a callback Function.