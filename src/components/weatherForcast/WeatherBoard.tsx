import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { WeatherForecastForTheDay } from "../../types/weatherForecast";
import { dayPeriodsList } from "../../constants/weatherForecast";
import { getWeatherDateLabel, shouldWeatherBeShown } from "../../helpers/weatherForecast";
import DayPeriodWeatherCell from "./DayPeriodWeatherCell";

type WeatherBoardProps = {
  weatherForecast: WeatherForecastForTheDay[];
};

const WeatherBoard: FC<WeatherBoardProps> = ({ weatherForecast }) => {
  if (!weatherForecast?.length) return null;

  return (
    <Box sx={{ width: "100%", mt: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
      {weatherForecast.map(({ date, weather }) => (
        <Box key={date} sx={{ display: "flex", pb: "8px", borderBottom: "1px solid #bbb" }}>
          <Box sx={{ width: "140px" }}>{getWeatherDateLabel(date)}</Box>

          <Grid container spacing={2}>
            {dayPeriodsList.map((period) => (
              <DayPeriodWeatherCell
                key={period}
                dayPeriod={period}
                weather={weather[period]}
                hidden={!shouldWeatherBeShown(date, period)}
              />
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default WeatherBoard;
