import { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");

  const fahrenheit = celsius === ""
    ? ""
    : (Number(celsius) * 9) / 5 + 32;

  return (
    <div>
      <h2>Temperature Converter</h2>

      <input
        type="number"
        value={celsius}
        placeholder="Celsius"
        onChange={(e) => setCelsius(e.target.value)}
      />

      <p>
        Fahrenheit: {fahrenheit === "" ? "--" : fahrenheit.toFixed(2)} °F
      </p>
    </div>
  );
}

export default TemperatureConverter;
