import React, { createContext } from 'react';
import { useAuth } from '../';

export const authContext = createContext({
  id: null,
  name: null,
  login: () => {},
  logout: () => {}
});

const { Provider } = authContext;
const AuthProvider = ({ children }) => {
  const [sid, login, logout] = useAuth();
  return (
    <Provider
      value={{
        id: sid?.id,
        name: sid?.name,
        login,
        logout
      }}
    >
      {children}
    </Provider>
  );
};

export default AuthProvider;
