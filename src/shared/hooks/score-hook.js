import { useState, useEffect } from 'react';
import { GET_SCORE, api } from '../';

export const useScore = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const initialScore = async () => {
      const response = await api.get(GET_SCORE);

      setScore(response.data.score);
    };

    initialScore();
  }, []);

  const getTeamScore = async () => {
    const response = await api.get(GET_SCORE);

    setScore(response.data.score);
  };

  return [score, getTeamScore];
};
