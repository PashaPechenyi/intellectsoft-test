import { AppBar, Box, Toolbar, Link as MuiLink, Chip, Avatar } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { HOME_URL, ROOT_URL, SIGN_IN_URL } from "../constants/urls";
import useAuth from "../hooks/useAuth";
import NavigationLink from "../components/NavigationLink";

type Page = { path: string; name: string; hidden?: boolean };
const getPages = (authorized: boolean): Page[] => [
  { path: ROOT_URL, name: "Root" },
  { path: HOME_URL, name: "Home", hidden: !authorized },
];

function Layout() {
  const [user, setUser] = useAuth();

  const logout = () => {
    setUser(null);
  };

  const isUserAuthorized = !!user;
  const pages = getPages(isUserAuthorized);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {pages.map(({ path, name, hidden }) =>
              hidden ? null : <NavigationLink path={path} name={name} key={path} />
            )}
          </Box>

          {isUserAuthorized ? (
            <>
              <Chip
                avatar={<Avatar />}
                label={user.email}
                variant="outlined"
                sx={{ color: "white" }}
              />

              <MuiLink
                component={"button"}
                sx={{ mx: "8px", color: "white", cursor: "pointer" }}
                onClick={logout}
              >
                Logout
              </MuiLink>
            </>
          ) : (
            <MuiLink component={Link} to={SIGN_IN_URL} sx={{ mx: "8px", color: "white" }}>
              Sign In
            </MuiLink>
          )}
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
}

export default Layout;
