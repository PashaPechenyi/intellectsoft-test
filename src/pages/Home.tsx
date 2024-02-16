import { Container, Typography } from "@mui/material";
import { SubmitHandler } from "react-hook-form";
import WeatherConfigForm, {
  WeatherConfigFormValues,
} from "../components/weatherForcast/WeatherConfigForm";
import WeatherBoard from "../components/weatherForcast/WeatherBoard";
import { WeatherForecastForTheDay } from "../types/weatherForecast";
import { useState } from "react";
import Loading from "../components/Loading";
import { getWeatherForecast } from "../services/api/requests";

const HomePage = () => {
  // It is better here to use some library like react-query
  // or create custom hook for requests which will have states like loading, error, data
  const [loading, setLoading] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecastForTheDay[]>([]);

  const selectWeatherConfig: SubmitHandler<WeatherConfigFormValues> = async (data) => {
    setLoading(true);

    try {
      const response = await getWeatherForecast(data.city);
      setWeatherForecast(response);
      setLoading(false);
    } catch (error) {
      // Show an error somehow
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", pt: "30px" }}>
      <Typography variant="h5" align="center" sx={{ mb: "30px", width: "100%" }}>
        Weather Forecast
      </Typography>

      <WeatherConfigForm onSubmit={selectWeatherConfig} />

      {loading ? <Loading /> : <WeatherBoard weatherForecast={weatherForecast} />}
    </Container>
  );
};

export default HomePage;
