import { PropsWithChildren, useCallback, useState } from "react";
import { User } from "../types/models";
import { AuthContext } from "../hooks/useAuth";
import { STORAGE_KEYS } from "../services/storage/keys";
import storage from "../services/storage/methods";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(() => storage.get<User | null>(STORAGE_KEYS.USER));

  const updateUser = useCallback((user: User | null) => {
    setUser(user);
    storage.set(STORAGE_KEYS.USER, user);
  }, []);

  return <AuthContext.Provider value={[user, updateUser]}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
