import { useState } from "react";
import useWeather from "../../hooks/use-fetch-weather";
import TemperatureUnitSwitcher from "./TemperatureUnitSwitcher";
import WeatherData from "./WeatherData";
const Weather = (props) => {
  const { data, loading, error } = useWeather(props.location);
  const [unit, setUnit] = useState(false);
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  } else if (!data) {
    return <div>No data available</div>;
  } else {
    return (
      <>
        {data.city ? (
          <>
            <TemperatureUnitSwitcher unit={unit} setUnit={setUnit} />
            <WeatherData data={data} unit={unit} />
          </>
        ) : (
          <p>Location not found</p>
        )}
      </>
    );
  }
};
export default Weather;
