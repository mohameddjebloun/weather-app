import { useState } from "react";

const SearchBar = (props) => {
  const [locationValue, setLocationValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (locationValue.trim().length === 0) {
      return;
    }
    props.setLocation(locationValue.trim());
  };
  const handleChange = (event) => {
    setLocationValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter location"
        value={locationValue}
        onChange={handleChange}
        className="input input-ghost w-full max-w-xs"
      />
      <button className="btn btn-ghost" type="submit">
        Search
      </button>
    </form>
  );
};
export default SearchBar;
