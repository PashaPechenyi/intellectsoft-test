import { createContext, useContext } from "react";
import { User } from "../types/models";

export const AuthContext = createContext<[User | null, (user: User | null) => void]>([
  null,
  () => {},
]);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export default useAuth;
