import React from "react";

function InputForm() {
  return (
    <div className="w-2/4 mx-auto mt-8 px-2 py-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full flex justify-between items-center"
      >
        <input
          type="text"
          placeholder="Enter your Todo......"
          className="w-10/12 border-red-400 border-2 px-3 py-2 rounded-md outline-none"
        />
        <button className="bg-green-400 px-6 py-2 rounded-md">Add Todo </button>
      </form>
    </div>
  );
}

export default InputForm;
