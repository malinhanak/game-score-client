import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';

export const useFetch = (method = 'GET', body = {}) => {
  const [cookies] = useCookies(['sid']);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [options, setOptions] = useState({
    url: null,
    method: 'GET',
    body: null
  });
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
 
      try {
        const response = await fetch(options.url, {
          method: options.method,
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${cookies.sid.token}`,
          },
          body: options.body
        });
        const queryData = await response.json()
 
        setData(queryData);
      } catch (error) {
        setIsError(true);
      }
 
      setIsLoading(false);
    };
 
    fetchData();
  }, [options]);
 
  return [{data, isLoading, isError}, setOptions];
}