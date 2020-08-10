import React from 'react';
import styled from 'styled-components';

import { NavigationCSS } from './';

export const DrawerLinks = ({ children }) => {
  return <Links>{children}</Links>;
};

const Links = styled.section`
  ${NavigationCSS}

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
`;
