import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
interface StringOrNumberObject {
  [key: string]: string | number | any;
}
const useMain = () => {
  const [weatherData,setWeatherData] = useState<StringOrNumberObject>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");
  const [query, setQuery] = useState<string>("Goa");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(location);
  };
  const fetchingData = async () => {
    try {
      if (query || query.length > 0) {
        setLoading(true);
        const res = await axios.post('api/weather',{query});
        const data = res?.data?.data;
        if(!data){
          throw new Error;
        }
        setWeatherData(data)
        setLocation("");
        setLoading(false);
        return;
      }
      return toast.error("Enter a Cityname");
    } catch (error: any) {
      setLoading(false);
      setLocation("");
      return toast.error("Something went wrong, try again");
    }
  };
  useEffect(() => {
    fetchingData();
  }, [query]);
  return {
    handleSubmit,
    handleChange,
    location,
    loading,
    weatherData
  };
};

export default useMain;
