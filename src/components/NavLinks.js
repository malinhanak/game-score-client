import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ close, links }) => {
  const yearlyGameLinks = links?.map((link) => (
    <NavLink to={`/game/${link}`} key={link} onClick={close}>
      {link}
    </NavLink>
  ));

  return <>{yearlyGameLinks}</>;
};

export default NavLinks;
