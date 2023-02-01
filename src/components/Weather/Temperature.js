const Temperature = (props) => {
  return (
    <p className="text-center">
      Temperature:{" "}
      {!props.unit
        ? `${parseFloat((props.data.main.temp - 273.15).toFixed(2))} °C`
        : `${parseFloat(
            (((props.data.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)
          )} °F`}
    </p>
  );
};
export default Temperature;
