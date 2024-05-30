import { useState } from "react";
import "./App.css";
import { WeatherSearch } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Weather Search</h1>
      <WeatherSearch />
    </div>
  );
}

export default App;
