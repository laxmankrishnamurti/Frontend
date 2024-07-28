import React, { useState } from "react";
import { useTodo } from "../../Context/TodoContext";

function InputForm({ dispatch }) {
  const [inputTodo, setInputTodo] = useState("");

  const { addTodo } = useTodo();

  const handleAdd = (e) => {
    e.preventDefault();

    if (!inputTodo) return;

    dispatch({
      type: "ADD",
    });

    setInputTodo("");
  };

  return (
    <div className="w-2/4 mx-auto mt-8 px-2 py-2">
      <form
        onSubmit={handleAdd}
        className="w-full flex justify-between items-center"
      >
        <input
          type="text"
          placeholder="Enter your Todo......"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          className="w-10/12 border-red-400 border-2 px-3 py-2 rounded-md outline-none"
        />
        <button className="bg-green-400 px-6 py-2 rounded-md">Add Todo </button>
      </form>
    </div>
  );
}

export default InputForm;
