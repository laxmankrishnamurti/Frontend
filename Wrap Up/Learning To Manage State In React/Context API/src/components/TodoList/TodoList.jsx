import React, { useCallback, useEffect, useState } from "react";
import { useTodo } from "../../Context/TodoContext";

function TodoList({ todo }) {
  const [inputValue, setInputValue] = useState(todo.todoMessage);
  const [isEditable, setIsEditable] = useState(false);

  const { todos, updateTodo, deleteTodo, completeTodo } = useTodo();

  function handleEdit() {
    setIsEditable((prev) => !prev);
    updateTodo(todo._id, inputValue);
  }

  function handleDelete() {
    deleteTodo(todo._id);
  }

  function handleComplete() {
    completeTodo(todo._id);
    setIsEditable(false);
  }

  return (
    <div
      className={`${
        todo.completed ? "bg-gray-400" : null
      } w-2/4 mx-auto mb-2 px-2 py-2 rounded-md `}
    >
      <div className="w-full flex justify-between gap-1">
        <input
          onChange={handleComplete}
          checked={todo.completed}
          disabled={todo.completed}
          type="checkbox"
          className="cursor-pointer"
        />
        <input
          type="text"
          value={inputValue}
          disabled={!isEditable}
          onChange={(e) => setInputValue(e.target.value)}
          className={`${isEditable ? "border-2 border-red-400" : null} ${
            todo.completed ? "line-through bg-transparent text-white  " : null
          } w-5/6 px-3 py-2 rounded-md outline-none`}
        />
        <button
          disabled={todo.completed}
          onClick={handleEdit}
          className={`${
            todo.completed ? "bg-gray-400 border-white border-2 " : null
          } w-24 py-2 bg-yellow-100 rounded-md`}
        >
          {isEditable ? "Save" : "Edit"}
        </button>
        <button
          onClick={handleDelete}
          className="w-24 py-2 bg-red-300 rounded-md"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoList;
