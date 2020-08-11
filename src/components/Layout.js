import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLinks } from './';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import Header from './Header';
import Footer from './Footer';
import { DrawerLinks } from '../styles';
import { useFetch, year } from '../shared';

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [links, error, isLoading] = useFetch(`/api/game/${year}`, null);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {}, [links, isLoading]);

  return (
    links && (
      <>
        <Header toggleDrawer={toggleDrawer} links={links} />
        {isOpen && (
          <SideDrawer close={closeDrawer} isOpen={isOpen}>
            <DrawerLinks>
              <NavLinks close={closeDrawer} links={links} />
            </DrawerLinks>
          </SideDrawer>
        )}
        {isOpen && <Backdrop close={closeDrawer} />}
        <Content>{props.children}</Content>
        <Footer />
      </>
    )
  );
};

const Content = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
`;

export default Layout;
