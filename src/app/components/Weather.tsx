import React from "react";
import ForecastCard from "./ForecastCard";

const Weather = ({ weatherData }:any) => {
  return (
    <div className="bg-slate-800/70 overflow-hidden flex justify-center items-center flex-col gap-2 shadow-md shadow-black rounded-md w-[310px] sm:w-[620px] lg:w-[800px] p-4">
      <p className="text-lg font-semibold">
        {weatherData?.location?.name}, {weatherData?.location?.country}
      </p>
      <img src={weatherData?.current?.condition?.icon} alt="icon" />
      <h1 className="text-2xl font-extrabold">
        {weatherData?.current?.temp_c} °C
      </h1>
      <h2 className="font-bold text-lg sm:text-xl">
        {weatherData?.current?.condition?.text}
      </h2>
      <ul className="w-full flex-wrap justify-center flex gap-4   items-center ">
        <li className="bg-white text-xs sm:text-sm font-semibold rounded-md p-2  text-black">{`Wind :  ${weatherData?.current?.wind_kph}/kmph`}</li>
        <li className="bg-white text-xs sm:text-sm font-semibold rounded-md p-2  text-black">{`Humidity :  ${weatherData?.current?.humidity} % `}</li>
        <li className="bg-white text-xs sm:text-sm font-semibold rounded-md p-2  text-black">{`Humidity :  ${weatherData?.current?.pressure_mb} mb `}</li>
      </ul>
      <p className="mt-2 border-b self-start">5-Day Forecast</p>
      <div className="flex w-full mt-2 py-2  overflow-x-auto  gap-4">
        {weatherData?.forecast?.forecastday?.map(
          (forecastData: any, idx: number) => {
            if (idx !== 0) {
              return <ForecastCard forecastData={forecastData} key={idx} />;
            }
          }
        )}
      </div>
    </div>
  );
};

export default Weather;
