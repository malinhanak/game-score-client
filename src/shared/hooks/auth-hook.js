import { useState } from 'react';
import { useCookies } from 'react-cookie';
import moment from 'moment';

import { api, LOGIN_TEAM } from '../';

const getExpirationDate = () => {
  const current = new Date();
  const expires = moment(current).add(8, 'h').format();
  return new Date(expires);
};

export const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['sid']);
  const [sid, setSid] = useState(cookies?.sid);
  const [isOnline, setIsOnline] = useState(cookies.sid ? true : false);

  const login = async (event, redirect, credentials) => {
    event.preventDefault();

    try {
      const response = await api.post(LOGIN_TEAM, { ...credentials });
      const userObj = response.data;
      await setCookie('sid', JSON.stringify(userObj), {
        path: '/',
        expires: getExpirationDate(),
        sameSite: true
      });

      setSid(userObj ? userObj : null);
      setIsOnline(true);
      redirect.push('/');
    } catch (err) {
      console.error('Login Team Error', err);
    }

    redirect.push('/');
  };

  const logout = () => {
    removeCookie('sid', { path: '/' });
    setIsOnline(false);
    setSid(null);
  };

  return [sid, isOnline, login, logout];
};
