"use client";

import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      setError("");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_WEATHER_API_URL}`,
        {
          params: {
            q: city,
            appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
            units: "metric",
            lang: "pt_br",
          },
        }
      );
      setWeatherData(response.data);
    } catch {
      setError("Cidade não encontrada. Tente novamente.");
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card>
        <CardContent>
          <div className="max-w-md mx-auto p-7 ">
            <h1 className="text-2xl font-bold text-center mb-5">
              Previsão do Tempo
            </h1>

            <div className="flex mb-4">
              <Input
                type="text"
                placeholder="Digite o nome da cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button
                onClick={fetchWeather}
              >
                Buscar
              </Button>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            {weatherData && (
              <div className="mt-4">
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-2">
                    {weatherData.name}, {weatherData.sys.country}
                  </h2>
                  <p className="text-4xl font-bold mb-4">
                    {Math.round(weatherData.main.temp)}°C
                  </p>
                  <p className="text-lg capitalize">
                    {weatherData.weather[0].description}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Umidade</p>
                      <p>{weatherData.main.humidity}%</p>
                    </div>
                    <div>
                      <p className="font-semibold">Velocidade do vento</p>
                      <p>{weatherData.wind.speed} m/s</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
