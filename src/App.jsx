import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const searchWeather = () => {
    const data = {
      hyderabad: {
        temperature: 35,
        condition: "Sunny",
      },
      mumbai: {
        temperature: 30,
        condition: "Rainy",
      },
      delhi: {
        temperature: 28,
        condition: "Cloudy",
      },
      chennai: {
        temperature: 32,
        condition: "Sunny",
      },
      kolkata: {
        temperature: 29,
        condition: "Rainy",
      },
      bangalore: {
        temperature: 27,
        condition: "Cloudy",
      }
    };

    const result = data[city.toLowerCase()];

    if (result) {
      setWeather({
        city,
        ...result,
      });
    } else {
      alert("City not found");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
           Weather App
        </h1>

        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={searchWeather}
          className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Search
        </button>

        {weather && (
          <div className="mt-6 bg-gray-100 p-4 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-gray-800">
               {weather.city}
            </h2>

            <p className="text-4xl font-bold text-blue-600 mt-2">
              {weather.temperature}°C
            </p>

            <p className="text-xl text-gray-600 mt-2">
              {weather.condition}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;