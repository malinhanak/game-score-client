import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { NavLinks } from './';
import { authContext } from '../shared';
import { Navigation, TopLinks } from '../styles';

const Header = ({ toggleDrawer, links }) => {
  const auth = useContext(authContext);
  const header = (
    <Navigation>
      <ion-icon name="menu-outline" onClick={toggleDrawer}></ion-icon>
      <TopLinks>
        <NavLinks links={links} />
      </TopLinks>
      {!auth.isOnline && (
        <NavLink id="auth-link" to="/auth">
          Logga in
        </NavLink>
      )}
      {auth.isOnline && (
        <NavLink id="auth-link" to="/" onClick={() => auth.logout()}>
          Logga ut
        </NavLink>
      )}
    </Navigation>
  );
  return ReactDOM.createPortal(header, document.getElementById('header-hook'));
};

export default Header;
