import React, { useState, useContext } from 'react';
import { Input } from '@material-ui/core';
import { authContext } from '../shared';
import '../styles/form-auth.scss';

const Auth = (props) => {
  const auth = useContext(authContext);
  const [team, setTeam] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={() => auth.login({ name: team, password: password })}>
      <section className="wrapper">
        <input
          placeholder="Team namn"
          type="text"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />
        <div className="border"></div>
      </section>
      <section className="wrapper">
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="border"></div>
      </section>
      <button type="submit" disabled={!team || !password ? true : false}>
        Logga in
      </button>
    </form>
  );
};

export default Auth;
