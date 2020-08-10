import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1rem 1rem;

  background-color: ${(props) => props.theme.colors.mosque};
  color: ${(props) => props.theme.colors.jetStream};

  font-size: 2rem;
  box-sizing: border-box;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme.colors.jetStream};
  }

  a:hover {
    color: ${(props) => props.theme.colors.accent};
  }

  @media (min-width: 768px) {
    ion-icon {
      display: none;
    }
  }
`;
