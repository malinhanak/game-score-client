import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { NavLinks } from './';
import { authContext } from '../shared';

const Footer = ({ toggleDrawer }) => {
  const auth = useContext(authContext);
  console.log(auth.isOnline);
  const footer = <section>My footer</section>;
  return ReactDOM.createPortal(footer, document.getElementById('footer-hook'));
};

export default Footer;
