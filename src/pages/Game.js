import React, { useEffect, useContext } from 'react';
import renderHTML from 'react-render-html';
import { useParams } from 'react-router-dom';

import { useFetch, Store, GET_GAME_RULE, authContext } from '../shared';
import { AddPoints } from '../components';

const Game = () => {
  const { game: name } = useParams();
  const { dispatch } = useContext(Store);
  const auth = useContext(authContext);
  const [data, error, isLoading] = useFetch(GET_GAME_RULE(name), null);

  useEffect(() => {
    return () => {
      dispatch({ type: 'CLEAR_ERROR' });
      dispatch({ type: 'CLEAR_CONTENT' });
    };
    // eslint-disable-next-line
  }, [name]);

  if (isLoading) return 'Laddar regler';

  return (
    <>
      <h3>{name}</h3>
      {data && renderHTML(data.rules)}
      {error && error}
      {auth.isOnline && <AddPoints game={name} />}
    </>
  );
};

export default Game;
