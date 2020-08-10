import styled from 'styled-components';

export const DrawerStyles = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  width: 70%;
  background: ${(props) => props.theme.colors.wildSand};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  display: flex;
  flex-direction: column;

  ion-icon {
    margin: 1rem 1rem 1rem auto;
    font-size: 2rem;
  }
`;
