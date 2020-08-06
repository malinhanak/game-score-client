import { useState } from 'react';
import { useCookies } from 'react-cookie';
import moment from 'moment';

const getExpirationDate = () => {
  const current = new Date();
  const expires = moment(current).add(8, 'h').format();
  return new Date(expires);
};

export const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['sid']);
  const [sid, setSid] = useState(cookies?.sid);

  const login = async (credentials) => {
    const res = await fetch('http://localhost:4000/api/sessions/login-team', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    const userObj = await res.json();

    setSid(userObj ? userObj : null);
    setCookie('sid', JSON.stringify(userObj), {
      path: '/',
      expires: getExpirationDate(),
      sameSite: true
    });
  };

  const logout = () => {
    removeCookie('sid', { path: '/' });
    setSid(null);
  };

  return [sid, login, logout];
};