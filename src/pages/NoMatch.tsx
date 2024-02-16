import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ROOT_URL } from "../constants/urls";

const NoMatchPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" align="center" mt="30px">
        Nothing to see here!
      </Typography>

      <Typography variant="h6" align="center">
        <Link to={ROOT_URL}>Go to the root page</Link>
      </Typography>
    </Box>
  );
};

export default NoMatchPage;
