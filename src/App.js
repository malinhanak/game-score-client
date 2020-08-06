import React, { useEffect, useState, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { authContext } from './shared';

const URI = 'http://localhost:4000';

function App() {
  const [cookies] = useCookies(['sid']);
  const auth = useContext(authContext);
  const [points, setPoints] = useState(0);
  const [totalScore, setScore] = useState(0);

  return (
    <div className="App">
      <nav>
        <ion-icon name="menu-outline"></ion-icon>
      </nav>
      App
    </div>
  );
}

export default App;
