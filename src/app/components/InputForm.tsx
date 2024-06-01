"use client";
import React from "react";
import useInput from "../hooks/useInput";
const InputForm:React.FC = () => {
        const {handleSubmit} = useInput();
  return (
    <form
      onSubmit={handleSubmit}
      className=" p-2 rounded-md flex items-center gap-2"
    >
      <input
        type="text"
        name="location"
        className="bg-transparent rounded-md px-4 outline-none p-2 border"
        placeholder="Enter a location.."
      />
      <button
        className="h-10 w-24 bg-orange-600 hover:bg-orange-700 transition-all hover:scale-95 rounded-md "
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default InputForm;
