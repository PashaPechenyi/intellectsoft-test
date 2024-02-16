import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { VALIDATION_RULES } from "../../constants/validation";

export type WeatherConfigFormValues = {
  city: string;
};
const defaultValues: WeatherConfigFormValues = {
  city: "",
};

type WeatherForecastFormProps = {
  onSubmit: SubmitHandler<WeatherConfigFormValues>;
};

const WeatherConfigForm: FC<WeatherForecastFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<WeatherConfigFormValues>({ defaultValues });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        gap: "16px",
        alignSelf: "center",
        maxWidth: "400px",
        width: "100%",
      }}
    >
      <Controller
        name="city"
        control={control}
        rules={{
          required: VALIDATION_RULES.required,
        }}
        render={({ field, fieldState: { error = null } }) => (
          <TextField
            {...field}
            label="City"
            error={!!error}
            helperText={error?.message || "Enter a capital city of a EU country"}
          />
        )}
      />

      <Button onClick={handleSubmit(onSubmit)} variant="contained">
        Search
      </Button>
    </Box>
  );
};

export default WeatherConfigForm;
