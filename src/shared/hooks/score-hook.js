import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import moment from 'moment';

const getExpirationDate = () => {
  const current = new Date();
  const expires = moment(current).add(12, 'h').format();
  return new Date(expires);
};

export const useScore = () => {
  const [cookies] = useCookies(['sid']);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const initialScore = async () => {
      if (!cookies.sid) return setScore(0);
      const res = await fetch('http://localhost:4000/api/teams/get-score', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${cookies.sid.token}`
        }
      });
      const result = await res.json();
      sessionStorage.setItem('score', result.score);

      setScore(result.score);
    };

    initialScore();
  }, []);

  const getTeamScore = async () => {
    const res = await fetch('http://localhost:4000/api/teams/get-score', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${cookies.sid.token}`
      }
    });
    const result = await res.json();

    setScore(result.score);
  };

  return [score, getTeamScore];
};
