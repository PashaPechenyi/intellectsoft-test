import { ReactElement, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ROOT_URL, SIGN_IN_URL } from "../constants/urls";

type ProtectedRouteProps = {
  children: ReactElement;
  withAuthorization?: boolean;
};
const ProtectedRoute = ({ children, withAuthorization = true }: ProtectedRouteProps) => {
  const [user] = useAuth();
  const navigate = useNavigate();
  const isAuthorized = user !== null;
  const isPageAllowed = withAuthorization === isAuthorized;

  useEffect(() => {
    if (isPageAllowed) return;

    const pathToRedirect = withAuthorization ? SIGN_IN_URL : ROOT_URL;
    navigate(pathToRedirect, { replace: true });
  }, [navigate, isPageAllowed, withAuthorization]);

  return isPageAllowed ? children : null;
};

export default ProtectedRoute;
