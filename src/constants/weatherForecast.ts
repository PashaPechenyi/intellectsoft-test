import { AcUnit, Thunderstorm, WaterDrop, WbCloudy, WbSunny } from "@mui/icons-material";
import { DAY_PERIOD, DayPeriods, WEATHER_TYPES } from "../types/weatherForecast";

export const dayPeriodsList = [
  DAY_PERIOD.MORNING,
  DAY_PERIOD.AFTERNOON,
  DAY_PERIOD.EVENING,
  DAY_PERIOD.NIGHT,
];

export const DAY_PERIOD_CONFIG: Record<DayPeriods, { start: number; end: number }> = {
  [DAY_PERIOD.MORNING]: { start: 5, end: 11 },
  [DAY_PERIOD.AFTERNOON]: { start: 11, end: 17 },
  [DAY_PERIOD.EVENING]: { start: 17, end: 23 },
  [DAY_PERIOD.NIGHT]: { start: 23, end: 29 },
};

export const ICONS_BY_WEATHER_TYPE = {
  [WEATHER_TYPES.SUNNY]: WbSunny,
  [WEATHER_TYPES.RAINY]: WaterDrop,
  [WEATHER_TYPES.CLOUDY]: WbCloudy,
  [WEATHER_TYPES.THUNDERSTORM]: Thunderstorm,
  [WEATHER_TYPES.SNOWY]: AcUnit,
} as const;
