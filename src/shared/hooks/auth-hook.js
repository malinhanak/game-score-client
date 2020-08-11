import { useState } from 'react';
import { useCookies } from 'react-cookie';
import moment from 'moment';

import { baseURI_Dev, loginTeam, getHeaders } from '../';

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

    const res = await fetch(`${baseURI_Dev}${loginTeam}`, {
      method: 'POST',
      headers: getHeaders(null),
      body: JSON.stringify(credentials)
    });

    const userObj = await res.json();

    setSid(userObj ? userObj : null);
    setIsOnline(true);
    await setCookie('sid', JSON.stringify(userObj), {
      path: '/',
      expires: getExpirationDate(),
      sameSite: true
    });

    redirect.push('/');
  };

  const logout = () => {
    removeCookie('sid', { path: '/' });
    setIsOnline(false);
    setSid(null);
  };

  return [sid, isOnline, login, logout];
};
