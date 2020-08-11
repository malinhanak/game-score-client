import React from 'react';
import renderHTML from 'react-render-html';
import { useParams } from 'react-router-dom';

import { useFetch, createSlug } from '../shared';

const Game = ({ match }) => {
  const { game } = useParams();
  const [gameRule, gameRuleError, isLoadingGameRule] = useFetch(
    `/api/game/rules/${createSlug(game)}`,
    null
  );

  if (isLoadingGameRule) return 'Laddar regler';
  console.log('DATA', gameRule);
  if (gameRuleError) console.log(gameRuleError);
  return (
    <>
      <h3>{game}</h3>
      {gameRule && renderHTML(gameRule.rules)}
    </>
  );
};

export default Game;
