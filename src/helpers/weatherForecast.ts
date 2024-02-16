import dayjs from "dayjs";
import { DayPeriods } from "../types/weatherForecast";
import { DAY_PERIOD_CONFIG } from "../constants/weatherForecast";

export const getWeatherDateLabel = (ISOdate: string) => {
  const date = dayjs(ISOdate);
  const isToday = date.isSame(dayjs(), "day");
  if (isToday) return "Today";

  const isTomorrow = date.isSame(dayjs().add(1, "days"), "day");
  if (isTomorrow) return "Tomorrow";

  return ISOdate;
};

export const shouldWeatherBeShown = (ISOdate: string, dayPeriod: DayPeriods) => {
  const currentDate = dayjs();
  const isToday = dayjs(ISOdate).isSame(dayjs(), "day");
  if (!isToday) return true;

  const config = DAY_PERIOD_CONFIG[dayPeriod];
  const startDate = dayjs(ISOdate).set("hour", config.start);
  const endDate = dayjs(ISOdate).set("hour", config.end);

  if (startDate.isSame(currentDate) || startDate.isAfter(currentDate)) return true;
  if (endDate.isAfter(currentDate)) return true;
  return false;
};
