import { FC } from "react";
import { Link as MuiLink, LinkProps } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { combineSxStyles } from "../helpers/styles";

type NavigationLinkProps = LinkProps & {
  path: string;
  name: string;
};

const NavigationLink: FC<NavigationLinkProps> = ({ path, name, sx, ...props }) => {
  const { pathname } = useLocation();
  const active = pathname === path;

  return (
    <MuiLink
      component={Link}
      to={path}
      sx={combineSxStyles(
        { mx: "8px", color: "white" },
        active && { textDecoration: "underline" },
        sx
      )}
      {...props}
    >
      {name}
    </MuiLink>
  );
};

export default NavigationLink;
