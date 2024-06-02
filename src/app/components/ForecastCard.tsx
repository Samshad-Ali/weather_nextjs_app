import React from "react";

const ForecastCard = ({ forecastData }:any) => {
  return (
    <div className="min-w-[200px] p-2  flex justify-center items-center flex-col gap-2 rounded-md shadow-md shadow-slate-950  bg-slate-800">
      <span className="self-start text-xs">{forecastData?.date}</span>
      <img src={forecastData?.day?.condition?.icon} alt="icon" />
      <p className=" font-bold">{forecastData?.day?.avgtemp_c} %</p>

      <p className="font-semibold text-sm">
        {forecastData?.day?.condition?.text}
      </p>
    </div>
  );
};

export default ForecastCard;
