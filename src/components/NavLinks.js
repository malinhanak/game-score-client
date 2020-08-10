import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFetch } from '../shared';
import { year } from '../shared';

const NavLinks = ({ close }) => {
  const [links, linksError, isLoadingLinks] = useFetch(
    `/api/game/${year}`,
    null
  );

  const yearlyGameLinks = links?.map((link) => (
    <NavLink to={`/game/${link}`} key={link} onClick={close}>
      {link}
    </NavLink>
  ));

  return <>{yearlyGameLinks}</>;
};

export default NavLinks;
