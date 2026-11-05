import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const searchWeather = () => {
    setWeather({
      city: city,
      temperature: 34,
      condition: "Sunny",
    });
  };

  return (
    <div className="min-h-screen bg-blue-500 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center w-80">
        <h1 className="text-3xl font-bold mb-4">
          Weather App
        </h1>

        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          onClick={searchWeather}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
        >
          Search
        </button>

        {weather && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">
              {weather.city}
            </h2>

            <p>🌡️ {weather.temperature}°C</p>

            <p>☀️ {weather.condition}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;