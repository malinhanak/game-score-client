import React from 'react';
import styled from 'styled-components';

const Button = ({ type, isDisabled, text }) => {
  return (
    <Styles type={type} disabled={isDisabled}>
      {text}
    </Styles>
  );
};

const Styles = styled.button`
  width: 100%;

  background-color: ${(props) => props.theme.colors.mosque};
  color: ${(props) => props.theme.colors.jetStream};

  border: none;
  border-radius: 3px;
  margin-top: 1.5rem;
  padding: 1rem 1rem;

  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  transition: 0.4s;

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabled};
    color: ${(props) => props.theme.colors.mineShaft};
  }
`;

export default Button;
