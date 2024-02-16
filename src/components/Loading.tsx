"use client";

import { Box, BoxProps, CircularProgress } from "@mui/material";
import { FC } from "react";
import { combineSxStyles } from "../helpers/styles";

type TLoadingProps = BoxProps;

const Loading: FC<TLoadingProps> = ({ sx, ...props }) => {
  return (
    <Box
      my={2}
      sx={combineSxStyles({ display: "flex", justifyContent: "center", alignItems: "center" }, sx)}
      {...props}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
