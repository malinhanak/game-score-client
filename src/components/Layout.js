import React, { useState, useContext } from 'react';
import { NavLinks } from './';
import { authContext, useFetch, year } from '../shared';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import Header from './Header';
import Footer from './Footer';

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
          <NavLinks />
        </SideDrawer>
      )}
      {isOpen && <Backdrop close={closeDrawer} />}
      {/* {auth.name}: {score === 0 ? score : score.score} */}
      <section>{props.children}</section>
      <Footer />
    </>
  );
};

export default Layout;
