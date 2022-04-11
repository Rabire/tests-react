import { Dispatch, SetStateAction, createContext, ReactNode, useState, useMemo } from 'react';

type Type = {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

const defaultValues: Type = {
  isAuth: false,
  setIsAuth: () => null
};

export const AuthContext = createContext<Type>(defaultValues);

export function CartContextProvider(children: ReactNode) {
  const [isAuth, setIsAuth] = useState(false);

  const value = useMemo(
    () => ({
      isAuth,
      setIsAuth
    }),
    [isAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
