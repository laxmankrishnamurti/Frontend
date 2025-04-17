import React from "react";
import { useUser } from "../../Context/UserContext";

function Form() {
  const { setUser, setPassword } = useUser();

  function handleSubmit(e) {
    e.preventDefault();
    setUser(e.target[0].value);
    setPassword(e.target[1].value);
    e.target[0].value = "";
    e.target[1].value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        className="border-black border-2 rounded-md px-2 py-2 ml-4 block mt-4"
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="border-black border-2 rounded-md px-2 py-2 ml-4 block mt-4"
      />
      <button
        type="submit"
        className="bg-green-400  mt-4 ml-4 px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
