import React, { createContext } from 'react';
import { useScore } from '../';

export const scoreContext = createContext({
  score: 0,
  getTeamScore: () => {},
  getScores: () => {},
  updateTeamScore: () => {}
});

const { Provider } = scoreContext;
const ScoreProvider = ({ children }) => {
  const [score, getTeamScore, updateTeamScore] = useScore();
  return (
    <Provider
      value={{
        score: score,
        getTeamScore,
        updateTeamScore
      }}
    >
      {children}
    </Provider>
  );
};

export default ScoreProvider;
