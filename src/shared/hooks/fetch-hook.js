import { useContext, useState, useEffect } from 'react';

import { api, Store } from '../';

export const useFetch = (url) => {
  const { state, dispatch } = useContext(Store);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    return api
      .get(url)
      .then(({ data }) => {
        setIsLoading(false);
        dispatch({ type: 'SET_CONTENT', payload: data });
      })
      .catch((err) => {
        setIsLoading(false);
        const error = `Server svara med ${err.response.status}: ${err.response.data.message}`;
        dispatch({ type: 'SET_ERROR', payload: error });
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [url]);

  return [state.content, state.error, isLoading];
};
