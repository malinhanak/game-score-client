import React from 'react';
import styled from 'styled-components';

const WrappedInput = ({ placeholder, type, value, setValue }) => {
  return (
    <Wrapper>
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="border"></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  position: relative;

  flex-direction: row;
  align-items: flex-end;

  width: 100%;
  margin: 1rem auto;

  &:first-of-type {
    margin: 1rem auto 0 auto;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.mineShaft};

  font-size: 1rem;
  color: ${(props) => props.theme.colors.mineShaft};

  &:focus {
    outline: none;
  }

  & ~ div.border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.colors.accent};
    transition: 0.4s;
  }

  &:focus ~ div.border {
    width: 100%;
    transition: 0.4s;
    left: 0;
  }
`;

export default WrappedInput;
