import dayjs from "dayjs";
import { WeatherForecastForTheDay } from "../types/weatherForecast";

const todaysDate = dayjs().format("YYYY/MM/DD");
const tomorrowsDate = dayjs().add(1, "days").format("YYYY/MM/DD");

export const MOCKED_WEATHER_FORECAST: WeatherForecastForTheDay[] = [
  {
    date: todaysDate,
    weather: {
      morning: { temperature: "+16", type: "rainy" },
      afternoon: { temperature: "+21", type: "sunny" },
      evening: { temperature: "+18", type: "snowy" },
      night: { temperature: "+8", type: "thunderstorm" },
    },
  },
  {
    date: tomorrowsDate,
    weather: {
      morning: { temperature: "-12", type: "cloudy" },
      afternoon: { temperature: "-12", type: "sunny" },
      evening: { temperature: "-12", type: "sunny" },
      night: { temperature: "-12", type: "sunny" },
    },
  },
];
