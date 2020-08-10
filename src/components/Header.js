import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { NavLinks } from './';
import { authContext } from '../shared';
import { Navigation, Links } from '../styles';

const Header = ({ toggleDrawer }) => {
  const auth = useContext(authContext);
  console.log(auth.isOnline);
  const header = (
    <Navigation>
      <ion-icon name="menu-outline" onClick={toggleDrawer}></ion-icon>
      <Links>
        <NavLinks />
      </Links>
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
