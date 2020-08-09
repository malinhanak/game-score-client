import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { NavLinks } from './';
import { authContext } from '../shared';
import '../styles/header.scss';

const Header = ({ toggleDrawer }) => {
  const auth = useContext(authContext);
  console.log(auth.isOnline);
  const header = (
    <nav>
      <section className="navigation-header-blue">
        <ion-icon name="menu-outline" onClick={toggleDrawer}></ion-icon>
        <section className="main-navigation__header-nav">
          <NavLinks />
        </section>
        {!auth.isOnline && <NavLink to="/auth">Logga in</NavLink>}
        {auth.isOnline && (
          <NavLink to="/" onClick={() => auth.logout()}>
            Logga ut
          </NavLink>
        )}
      </section>
    </nav>
  );
  return ReactDOM.createPortal(header, document.getElementById('header-hook'));
};

export default Header;
