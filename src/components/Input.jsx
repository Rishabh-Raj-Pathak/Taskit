import React from "react";

function Input() {
  return (
    <div className="main flex justify-between">
      <div>
        <input
          type="text"
          placeholder="Filter tasks"
          className="bg-black rounded-md text-white mx-3 p-2 border-2 border-current"
        />
        <button className="status mx-2 bg-black text-white rounded-xl p-2 text-sm border-2 border-neutral-500	">
          status
        </button>
        <button className="priority bg-black text-white rounded-xl p-2 text-sm border-2 border-neutral-500	">
          priority
        </button>
      </div>
      <div>
        <button className="priority bg-black text-white rounded-xl p-2 text-sm border-2 border-neutral-500 mx-5">
          Filter
        </button>
      </div>
    </div>
  );
}

export default Input;
