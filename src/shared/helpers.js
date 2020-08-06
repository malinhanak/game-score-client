import moment from 'moment';

export const getGames = async () => {
  const year = await moment(new Date()).format('YYYY');
  console.log('year', year);
  const res = await fetch(`http://localhost:4000/api/game/${year}`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' }
  });

  const games = await res.json();
  console.log('games', games);

  return games;
};

export const fetchData = async (token) => {
  const year = await moment(new Date()).format('YYYY');
  const res = await fetch(`http://localhost:4000/api/game/${year}`, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  res
    .json()
    .then((res) => res)
    .catch((err) => err);
};
