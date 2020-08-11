import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { baseURI_Dev, getScore, getHeaders } from '../';

export const useScore = () => {
  const [cookies] = useCookies(['sid']);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const initialScore = async () => {
      if (!cookies.sid) return setScore(0);
      const res = await fetch(`${baseURI_Dev}${getScore}`, {
        method: 'GET',
        headers: getHeaders(cookies)
      });

      const result = await res.json();
      sessionStorage.setItem('score', result.score);

      setScore(result.score);
    };

    initialScore();
  }, [cookies]);

  const getTeamScore = async () => {
    const res = await fetch('http://localhost:4000/api/teams/get-score', {
      method: 'GET',
      headers: getHeaders(cookies)
    });
    const result = await res.json();

    setScore(result.score);
  };

  return [score, getTeamScore];
};
