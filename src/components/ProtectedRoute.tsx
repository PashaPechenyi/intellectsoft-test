import { ReactElement, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ROOT_URL, SIGN_IN_URL } from "../constants/urls";

type ProtectedRouteProps = {
  children: ReactElement;
  withAuthorize?: boolean;
};
const ProtectedRoute = ({ children, withAuthorize = true }: ProtectedRouteProps) => {
  const [user] = useAuth();
  const navigate = useNavigate();
  const isAuthorized = user !== null;
  const isPageAllowed = withAuthorize === isAuthorized;

  useEffect(() => {
    if (isPageAllowed) return;

    const pathToRedirect = withAuthorize ? SIGN_IN_URL : ROOT_URL;
    navigate(pathToRedirect, { replace: true });
  }, [navigate, isPageAllowed, withAuthorize]);

  return isPageAllowed ? children : null;
};

export default ProtectedRoute;
