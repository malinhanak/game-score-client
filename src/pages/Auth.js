import React, { useState, useContext } from 'react';
import { authContext } from '../shared';
import { Input, Button as Submit } from '../components';
import { Form } from '../styles';

const Auth = ({ history }) => {
  const auth = useContext(authContext);
  const [team, setTeam] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form
      onSubmit={(e) =>
        auth.login(e, history, { name: team, password: password })
      }
    >
      <Input
        placeholder="Team namn"
        type="text"
        value={team}
        setValue={setTeam}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        setValue={setPassword}
      />
      <Submit
        type="submit"
        isDisabled={!team || !password ? true : false}
        text="Logga in"
      />
    </Form>
  );
};

export default Auth;
