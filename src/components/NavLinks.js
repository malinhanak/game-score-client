import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { useFetch } from '../shared';
import { year } from '../shared';
import '../styles/nav-links.scss';

const NavLinks = () => {
  const [links, linksError, isLoadingLinks] = useFetch(`/api/game/${year}`, null);

  const yearlyGameLinks = links?.map((link) => (
    <NavLink to={`/game/${link}`} key={link}>
      {link}
    </NavLink>
  ));

  return (
    <section className="nav-links">
      {yearlyGameLinks}
      <NavLink to="/auth">Logga in Team</NavLink>
    </section>
  );
};
export default NavLinks;
