import { MOCKED_WEATHER_FORECAST } from "../../constants/mocks";
import { WeatherForecastForTheDay } from "../../types/weatherForecast";

export const getWeatherForecast = async (city: string) => {
  return new Promise<WeatherForecastForTheDay[]>((resolve) => {
    setTimeout(() => {
      resolve(MOCKED_WEATHER_FORECAST);
    }, 1000);
  });
};
