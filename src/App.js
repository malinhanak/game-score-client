import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const api = axios.create({
  baseURL: `https://new-game-store.herokuapp.com/api/teams`,
  headers: {
    'Content-Type': 'application/json'
  }
});

function App() {
  const [teamName, setName] = useState('');
  const [password, setPassword] = useState('');
  const [points, setPoints] = useState(0);
  const [totalScore, setScore] = useState(0);
  const isTeam = localStorage.getItem('teamName') || null;

  const createTeams = async (name, password) => {
    const team = {
      name: name,
      password: password,
      kubb: 0,
      crocket: 0,
      plockepin: 0,
      arrowTarget: 0
    };
    try {
      const response = await api.post(`/`, team);
      await localStorage.setItem('teamName', name);
      setName('');
      setPassword('');
      return response;
    } catch (err) {
      console.log('err', err);
    }
  };
  const addPoints = async (game, points) => {
    const name = await localStorage.getItem('teamName');
    const data = {
      name: name,
      game: game,
      points: parseInt(points, 10)
    };
    try {
      const response = await api.patch(`/set-score`, data);
      setPoints(0);
      getScore();
      return response;
    } catch (err) {
      console.log('err', err);
    }
  };

  const getScore = async (game, points) => {
    const name = await localStorage.getItem('teamName');
    try {
      const response = await api.get(`/get-score/${name}`);

      setScore(response.data.totalScore);
      return response;
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    if (isTeam) {
      getScore();
    }
  }, [isTeam]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Tvehögakampen 2020!</p>
        <input type="text" name="name" value={teamName} onChange={(e) => setName(e.target.value)} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={() => createTeams(teamName, password)}>Skapa team</button>

        <h3>Kubb</h3>
        <input
          type="text"
          name="kubbpoints"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />
        <button onClick={() => addPoints('kubb', points)}>Lägg till poäng</button>

        <h3>Plockepinn</h3>
        <input
          type="text"
          name="plockepinn"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />
        <button onClick={() => addPoints('plockepin', points)}>Lägg till poäng</button>

        <h3>Pilbåge</h3>
        <input
          type="text"
          name="arrowTarget"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />
        <button onClick={() => addPoints('arrowTarget', points)}>Lägg till poäng</button>

        <h3>Crocket</h3>
        <input
          type="text"
          name="crocket"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />
        <button onClick={() => addPoints('crocket', points)}>Lägg till poäng</button>

        <h1>TOTAL POÄNG: {totalScore}</h1>
      </header>
    </div>
  );
}

export default App;
