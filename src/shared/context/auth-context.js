import React, { createContext } from 'react';
import { useAuth } from '../';

export const authContext = createContext({
  id: null,
  name: null,
  isOnline: false,
  login: () => {},
  logout: () => {}
});

const { Provider } = authContext;
const AuthProvider = ({ children }) => {
  const [sid, isOnline, login, logout] = useAuth();
  return (
    <Provider
      value={{
        id: sid?.id,
        name: sid?.name,
        isOnline: isOnline,
        login,
        logout
      }}
    >
      {children}
    </Provider>
  );
};

export default AuthProvider;
