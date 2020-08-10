import styled from 'styled-components';

const Score = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;

  font-weight: 900;
  font-size: 3rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.jetStream};

  small {
    font-size: 40%;
    padding-bottom: 0.5rem;
  }
`;

export default Score;
