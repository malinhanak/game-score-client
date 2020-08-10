import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { authContext, useFetch } from '../shared';
import { year } from '../shared';

const NavLinks = () => {
  const auth = useContext(authContext);
  const [links, linksError, isLoadingLinks] = useFetch(
    `/api/game/${year}`,
    null
  );

  const yearlyGameLinks = links?.map((link) => (
    <NavLink to={`/game/${link}`} key={link}>
      {link}
    </NavLink>
  ));

  return <Styles>{yearlyGameLinks}</Styles>;
};

const Styles = styled.section`
  margin: 0;
  padding: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.mineShaft};
    text-decoration: none;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0.9rem 0;
  }

  a:first-of-type {
    margin: 0.9rem 0 0 0;
  }

  a:hover,
  a:active,
  a.active {
    background-color: ${(props) => props.theme.colors.mosque};
    color: ${(props) => props.theme.colors.accent};
    padding: 0.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    a {
      color: ${(props) => props.theme.colors.jetStream};
      text-decoration: none;
      margin: 0;
    }

    a:first-of-type {
      margin: 0;
    }

    a:hover,
    a:active,
    a.active {
      color: ${(props) => props.theme.colors.accent};
    }
  }
`;

export default NavLinks;
