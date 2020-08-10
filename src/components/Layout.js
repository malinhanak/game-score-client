import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { NavLinks } from './';
import { authContext, useFetch, year } from '../shared';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import Header from './Header';
import Footer from './Footer';
import { DrawerLinks } from '../styles';

const URI = 'http://localhost:4000';

const Layout = (props) => {
  const auth = useContext(authContext);
  const [isOpen, setIsOpen] = useState(false);
  const [score, scoreError, isLoadingScore] = useFetch(`/api/game/${year}`, 0);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      {isOpen && (
        <SideDrawer close={closeDrawer} isOpen={isOpen}>
          <DrawerLinks>
            <NavLinks close={closeDrawer} />
          </DrawerLinks>
        </SideDrawer>
      )}
      {isOpen && <Backdrop close={closeDrawer} />}
      {/* {auth.name}: {score === 0 ? score : score.score} */}
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
};

const Content = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
`;

export default Layout;
