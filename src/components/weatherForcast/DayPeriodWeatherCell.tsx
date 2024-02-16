import { Box, Grid, Typography } from "@mui/material";
import { DayPeriods, WeatherForecastForTheDayPeriod } from "../../types/weatherForecast";
import { ICONS_BY_WEATHER_TYPE } from "../../constants/weatherForecast";

type WeatherTableCellProps = {
  weather: WeatherForecastForTheDayPeriod;
  dayPeriod: DayPeriods;
  hidden?: boolean;
};
const DayPeriodWeatherCell = ({ weather, dayPeriod, hidden = false }: WeatherTableCellProps) => {
  const WeatherIcon = ICONS_BY_WEATHER_TYPE[weather.type];

  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ textTransform: "capitalize" }}>{dayPeriod}</Typography>

      {hidden ? (
        <Typography>---</Typography>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: "4px" }}>{weather.temperature}</Typography>
          <WeatherIcon />
        </Box>
      )}
    </Grid>
  );
};

export default DayPeriodWeatherCell;
