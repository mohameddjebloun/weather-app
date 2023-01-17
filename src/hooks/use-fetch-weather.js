import { useState, useEffect } from "react";

const useWeather = (location) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = "532b9ac72ba84f7fb0492f5c5e3f2e14";

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [location, API_KEY]);

  return { data, loading, error };
};
export default useWeather;
