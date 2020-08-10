import React from 'react';
import ReactDOM from 'react-dom';
import { Backdrop as Styles } from '../styles';

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <Styles onClick={props.close}></Styles>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
