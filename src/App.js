import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather/Weather";
function App() {
  const [location, setLocation] = useState("Algiers");

  return (
    <>
      <SearchBar setLocation={setLocation} /> <Weather location={location} />
    </>
  );
}

export default App;
