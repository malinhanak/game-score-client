import React, { useEffect, useState, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { NavLinks } from './';
import { authContext, useFetch, year } from '../shared';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import Header from './Header';

const URI = 'http://localhost:4000';

const Layout = (props) => {
  const auth = useContext(authContext);
  const [isOpen, setIsOpen] = useState(false);
  const [score, scoreError, isLoadingScore] = useFetch(`/api/game/${year}`, 0);

  console.log('SCORE', score);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      {isOpen && (
        <SideDrawer close={closeDrawer} isOpen={isOpen}>
          <section className="main-navigation__drawer-nav">
            <NavLinks />
          </section>
        </SideDrawer>
      )}
      {isOpen && <Backdrop close={closeDrawer} />}
      <button onClick={() => auth.login({ name: 'Team 1', password: 'hemligtord' })}>
        Logga in team
      </button>
      {auth.name}: {score === 0 ? score : score.score}
      App
      <section style={{ marginTop: '3rem' }}>{props.children}</section>
    </>
  );
};

export default Layout;
