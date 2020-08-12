import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { GET_SCORE, SET_SCORE, api } from '../';

export const useScore = () => {
  const [cookies] = useCookies(['sid']);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const initialScore = async () => {
      if (cookies.sid) {
        const response = await api.get(GET_SCORE);
        setScore(response.data.score);
      }
    };

    initialScore();
  }, [cookies.sid]);

  const getTeamScore = async () => {
    const response = await api.get(GET_SCORE);

    setScore(response.data.score);
  };

  const updateTeamScore = async (team, gameName, points, event) => {
    event.preventDefault();

    const data = {
      name: team,
      game: gameName,
      points: points
    };

    await api.patch(SET_SCORE, { ...data });

    getTeamScore();
  };

  return [score, getTeamScore, updateTeamScore];
};
