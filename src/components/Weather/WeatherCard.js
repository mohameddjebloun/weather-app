import React from "react";
import moment from "moment";
import Temperature from "./Temperature";

const WeatherCard = (props) => {
  return (
    <div className="carousel-item card w-96 bg-opacity-0 ">
      <figure>
        <img
          src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
          alt={props.day.weather[0].description}
        />
      </figure>
      <div className="card-body">
        <Temperature unit={props.unit} data={props.day} />
        <p className="text-center">
          {moment(props.day.dt_txt).format("dddd, MMMM Do YYYY, h:mm a")}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
