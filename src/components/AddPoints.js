import React, { useContext, useState } from 'react';
import { authContext, scoreContext } from '../shared';
import { Input, Button as Submit } from '../components';
import { Form } from '../styles';

const AddPoints = ({ game }) => {
  const [points, setPoints] = useState('');
  const auth = useContext(authContext);
  const team = useContext(scoreContext);

  return (
    auth.isOnline && (
      <>
        <Form
          onSubmit={(e) => {
            team.updateTeamScore(auth.name, game, points, e);
            setPoints('');
          }}
        >
          <Input
            placeholder={`Ange poäng för ${game}`}
            type="text"
            value={points}
            setValue={setPoints}
          />
          <Submit
            type="submit"
            isDisabled={!points ? true : false}
            text="Registrera poäng"
          />
        </Form>
      </>
    )
  );
};

export default AddPoints;
