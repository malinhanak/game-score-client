import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLinks } from './';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import Header from './Header';
import Footer from './Footer';
import { DrawerLinks } from '../styles';

const Layout = ({ children, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
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
      <Content>{children}</Content>
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
