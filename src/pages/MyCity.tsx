import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/city.css";

interface WeatherData {
  temperature: number;
  windspeed: number;
}

function MyCity() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=49.90&longitude=28.60&current_weather=true",
      )
      .then((response) => {
        setWeather({
          temperature: response.data.current_weather.temperature,

          windspeed: response.data.current_weather.windspeed,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="container">
      <div className="section">
        <h1 className="title">Моє місто - Бердичів</h1>
        <div className="city-content">
          <img
            className="city-image"
            src="/image/city.jpg"
            alt="Бердичів"
          />

          <p className="text">
            Бердичів - одне з найвідоміших міст Житомирської області. Місто має
            цікаву історію, красиву архітектуру та затишну атмосферу.
          </p>
        </div>

        <div className="city-grid">
          <div className="weather-card">
            <h2 className="subtitle">Поточна погода</h2>

            {weather ? (
              <>
                <p className="weather-temp">{weather.temperature}°C</p>

                <p className="weather-info">
                  Швидкість вітру: {weather.windspeed} км/год
                </p>

                <p className="weather-info">Країна: Україна</p>

                <p className="weather-info">Координати: 49.90, 28.60</p>
              </>
            ) : (
              <p>Завантаження...</p>
            )}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="city-content">
          <img
            className="city-image"
            src="/image/beer.jpg"
            alt="Бердичівське пиво"
          />

          <p className="text">
            Бердичів відомий не лише своєю історією та архітектурою, а й
            знаменитим Бердичівським пивом. Це один із найвідоміших місцевих
            брендів, який знають у багатьох містах України.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MyCity;
