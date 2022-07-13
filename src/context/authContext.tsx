import { rejects } from "assert";
import { resolve } from "path";
import React, { createContext, useContext, useState } from "react";

export interface User {
  userName: string;
  password: string;
}

export interface AuthContextType {
  user: User | undefined;
  loading: boolean;
  login: (userName: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(user)

  const login = (userName: string, password: string) => {
    return new Promise<void>((resolve, rejects) => {
        setLoading(true);
        setTimeout(() => {
            setUser({
                userName,
                password,
            });
            setLoading(false);
            resolve()
        }, 3000);
    })
  };

  const values = { user, loading, login };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};
