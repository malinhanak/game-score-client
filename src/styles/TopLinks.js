import React from 'react';
import styled from 'styled-components';

import { NavigationCSS } from './';

export const TopLinks = ({ children }) => {
  return <Links>{children}</Links>;
};

const Links = styled.section`
  ${NavigationCSS}
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    a {
      color: ${(props) => props.theme.colors.jetStream};
      text-decoration: none;
      margin: 0 1rem;
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
