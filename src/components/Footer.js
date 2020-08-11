import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useCookies } from 'react-cookie';
import { authContext, scoreContext } from '../shared';
import { Score } from '../styles';

const Footer = () => {
  const [cookies] = useCookies(['sid']);
  const auth = useContext(authContext);
  const team = useContext(scoreContext);

  useEffect(() => {
    if (cookies && cookies.sid) team.getTeamScore();
  }, [team, cookies]);

  const footer = (
    <>
      {!auth.isOnline && 'My footer'}
      {auth.isOnline && (
        <Score>
          {team.score}
          <small>poäng</small>
        </Score>
      )}
    </>
  );
  return ReactDOM.createPortal(footer, document.getElementById('footer-hook'));
};

export default Footer;
