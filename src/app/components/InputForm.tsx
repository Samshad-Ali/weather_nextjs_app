import React, { ChangeEvent, FormEvent } from "react";
interface InputFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  location: string;
}
const InputForm = ({handleChange,handleSubmit,location}:InputFormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className=" w-[300px]  sm:w-[500px] rounded-md flex items-center gap-2"
    >
      <input
      value={location}
      onChange={handleChange}
        type="text"
        className="bg-transparent w-[90%] rounded-md px-4 outline-none p-2 border"
        placeholder="Enter a cityname.."
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
