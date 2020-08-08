import React, { useState, useContext } from 'react';
import { authContext } from '../shared';

const Auth = (props) => {
  const auth = useContext(authContext);
  const [team, setTeam] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <input value={team} onChange={(e) => setTeam(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => auth.login({ name: team, password: password })}>Logga in</button>
    </>
  );
};

export default Auth;
