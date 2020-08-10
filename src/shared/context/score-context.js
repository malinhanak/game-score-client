import React, { createContext } from 'react';
import { useScore } from '../';

export const scoreContext = createContext({
  score: 0,
  getTeamScore: () => {},
  getScores: () => {}
});

const { Provider } = scoreContext;
const ScoreProvider = ({ children }) => {
  const [score, getTeamScore] = useScore();
  return (
    <Provider
      value={{
        score: score,
        getTeamScore
      }}
    >
      {children}
    </Provider>
  );
};

export default ScoreProvider;
