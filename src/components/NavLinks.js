import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import moment from 'moment';
import { fetchData } from '../shared';

const NavLinks = () => {
  const [games, setGames] = useState(null);
  const [errors, setErrors] = useState(null);
  const [cookies] = useCookies(['sid']);
  const fetchData = async () => {
    const year = await moment(new Date()).format('YYYY');
    const res = await fetch(`http://localhost:4000/api/game/${year}`, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${cookies.sid.token}`
      }
    });
    res
      .json()
      .then((res) => setGames(res))
      .catch((err) => setErrors(err));
  };

  const links = games?.map((game) => (
    <NavLink to={`/game:${game}`} key={game}>
      {game}
    </NavLink>
  ));

  useEffect(() => {
    fetchData();
  }, []);

  if (games) console.log('gameList', games);
  return <>{links}</>;
};
export default NavLinks;
