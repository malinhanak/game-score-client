import { useState } from 'react';

export const useGame = () => {
  const [games, setGames] = useState(cookies?.sid);

  const getGames = async () => {
    const res = await fetch('http://localhost:4000/api/...', {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    });

    return null;
  };

  return [getGames];
};
