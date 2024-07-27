import React, { useState } from "react";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  function handleEdit() {
    setIsEditable((prev) => !prev);
  }

  return (
    <div className="w-2/4 mx-auto mt-8 px-2 py-2 ">
      <div className="w-full flex justify-between gap-2">
        <input
          type="text"
          value={inputValue}
          disabled={!isEditable}
          onChange={(e) => setInputValue(e.target.value)}
          className={`${
            isEditable ? "border-2 border-red-400" : null
          } w-5/6 px-3 py-2 rounded-md outline-none`}
        />
        <button
          onClick={handleEdit}
          className="w-24 py-2 bg-yellow-100 rounded-md"
        >
          Edit
        </button>
        <button className="w-24 py-2 bg-red-300 rounded-md">Remove</button>
      </div>
    </div>
  );
}

export default TodoList;
