import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "../constants/urls";
import { VALIDATION_RULES } from "../constants/validation";
import { createSxStylesList } from "../helpers/styles";

type SignUpForm = {
  email: string;
};
const defaultValues: SignUpForm = {
  email: "",
};

const SignInPage = ({}) => {
  const navigate = useNavigate();
  const [, setUser] = useAuth();
  const { control, handleSubmit } = useForm<SignUpForm>({ defaultValues });

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    setUser(data);
    navigate(HOME_URL, { replace: true });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={sxStyles.root}>
        <Typography variant="h5" align="center" sx={{ mb: "30px" }}>
          Sign in to Test App
        </Typography>

        <Controller
          name="email"
          control={control}
          rules={{
            required: VALIDATION_RULES.required,
            pattern: VALIDATION_RULES.emailPattern,
          }}
          render={({ field, fieldState: { error = null } }) => (
            <TextField
              {...field}
              label="Email"
              type="email"
              error={!!error}
              helperText={error?.message || " "}
              sx={{ mb: "16px" }}
            />
          )}
        />

        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

const sxStyles = createSxStylesList({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "560px",
    m: "100px 16px 16px",
    p: "16px",
    border: "1px solid #d2d2d2",
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;",
    borderRadius: "4px",
  },
});

export default SignInPage;
