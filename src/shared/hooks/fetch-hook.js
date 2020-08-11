import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { baseURI } from '../';
import { getHeaders } from '../helpers';

export const useFetch = (url, initialValue, method = 'GET', body = null) => {
  const [cookies] = useCookies(['sid']);
  const [response, setResponse] = useState(initialValue);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`${baseURI}${url}`, { method, headers: getHeaders(cookies), body })
        .then((response) => response.json())
        .then((data) => {
          setResponse(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    };

    fetchData();
    // eslint-disable-next-line
  }, [method, body, url]);

  return [response, error, isLoading];
};
