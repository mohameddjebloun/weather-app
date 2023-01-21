const TemperatureUnitSwitcher = (props) => {
  const handleUnitChange = () => {
    props.setUnit(!props.unit);
  };
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">Celsius/Fahrenheit</span>
        <input onChange={handleUnitChange} type="checkbox" className="toggle" />
      </label>
    </div>
  );
};
export default TemperatureUnitSwitcher;
