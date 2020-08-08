import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export const useFetch = (url, initialValue, method = 'GET', body = null) => {
  const URI = 'http://localhost:4000';
  const [cookies] = useCookies(['sid']);
  const [response, setResponse] = useState(initialValue);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const headers = {
    'content-type': 'application/json'
  };

  if (cookies.sid) {
    headers.Authorization = `Bearer ${cookies.sid.token}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      fetch(`${URI}${url}`, { method, headers, body })
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
  }, [method, body, url]);

  return [response, error, isLoading];
};
