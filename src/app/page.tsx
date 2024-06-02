"use client";

import { Toaster } from "react-hot-toast";
import InputForm from "./components/InputForm";
import useMain from "./hooks/useMain";
import Loading from "./components/Loding";
import Weather from "./components/Weather";
import Header from "./components/Header";
export default function Home() {
  const { handleChange, handleSubmit, location, loading,weatherData } =
    useMain();
  return (
    <main className=" w-full h-auto sm:h-screen flex gap-4 flex-col  items-center ">
      <Toaster />
      <Header/>
      <div className="p-4 flex gap-2 flex-col justify-center items-center">

      <InputForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        location={location}
        />
      {loading ? <Loading /> : <Weather weatherData={weatherData} />}
        </div>
    </main>
  );
}
