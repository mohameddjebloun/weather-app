import moment from "moment";
import Temperature from "./Temperature";
import WeatherCard from "./WeatherCard";
const WeatherData = (props) => {
  const data = props.data;
  return (
    <div className="bg-opacity-0">
      <h2 className="text-5xl font-bold">
        {data.city.name}, {data.city.country}
      </h2>
      <div className="flex">
        <div className="w-1/2">
          <h3 className="text-4xl py-6 ">
            {data.list[0].weather[0].description}
          </h3>
        </div>
        <div className="w-1/2">
          <Temperature unit={props.unit} data={data.list[0]} />
          <p className="text-center py-6">
            Humidity: {data.list[0].main.humidity}%
          </p>
          <p className="text-center">
            Wind Speed: {data.list[0].wind.speed}m/s
          </p>
        </div>
      </div>

      <div className="bg-opacity-0 p-4">
        <div className="carousel w-full">
          {data.list.map((day, index) => (
            <WeatherCard key={index} day={day} unit={props.unit} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default WeatherData;
