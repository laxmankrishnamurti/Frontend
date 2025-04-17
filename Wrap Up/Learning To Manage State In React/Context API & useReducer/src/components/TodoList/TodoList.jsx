import { useEffect, useState } from "react";

function TodoList({ todo, handleDeleteTodo, handleComplete, handleEditTodo }) {

  const [todoValue, setTodoValue] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [isEditable, setIsEditable] = useState(false)

  function handleEdit() {
    setIsEditable((prev) => !prev)
    handleEditTodo(todo._id, todoValue)
  }

  useEffect(() => {
    setTodoValue(todo.todoMessage)
  }, [])

  return (
    <>
      <div className={`${todo.isCompleted ? "bg-red-400" : null} w-full mx-auto bg-slate-300 p-2 rounded-md mt-4 flex justify-between items-center`}>
        <div>
          <input
            type="checkbox"
            onClick={() => handleComplete(todo._id)}
            checked={isChecked}
            onChange={() => setIsChecked(prev => !prev)}
            disabled={isChecked}
            className="cursor-pointer placeholder:bg-red-400"
          />
        </div>
        <div className="w-3/5">
          <input
            type="text"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
            disabled={!isEditable}
            className={`${isChecked ? "line-through" : null} w-full px-2 py-2 rounded-md`}
          />
        </div>
        <div>
          <button
            onClick={handleEdit}
            disabled={isChecked}
            className={`${isChecked ? "bg-gray-400" : null} bg-yellow-200 px-8 py-2 rounded-md`}>
            {isEditable ? "Save" : "Edit"}
          </button>

        </div>
        <div>
          <button
            onClick={() => handleDeleteTodo(todo._id)}
            className="bg-red-300 px-5 py-2 rounded-md"
          >Delete</button>
        </div>
      </div>
    </>
  )
}

export default TodoList;
