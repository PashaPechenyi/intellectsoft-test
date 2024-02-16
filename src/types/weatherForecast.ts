import { ObjectValues } from "./models";

export const DAY_PERIOD = {
  MORNING: "morning",
  AFTERNOON: "afternoon",
  EVENING: "evening",
  NIGHT: "night",
} as const;
export type DayPeriods = ObjectValues<typeof DAY_PERIOD>;

export const WEATHER_TYPES = {
  SUNNY: "sunny",
  RAINY: "rainy",
  CLOUDY: "cloudy",
  THUNDERSTORM: "thunderstorm",
  SNOWY: "snowy",
} as const;
export type WeatherTypes = ObjectValues<typeof WEATHER_TYPES>;

export type WeatherForecastForTheDayPeriod = {
  temperature: string;
  type: WeatherTypes;
};
export type WeatherForecastForTheDay = {
  date: string;
  weather: Record<DayPeriods, WeatherForecastForTheDayPeriod>;
};
