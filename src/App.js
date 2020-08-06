import React, { useEffect, useState, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { authContext, useFetch } from './shared';
import { NavLinks } from './components'

const URI = 'http://localhost:4000';

function App() {
  const [{ data, isLoading, isError }, setOptions] = useFetch();
  const [cookies] = useCookies(['sid']);
  const auth = useContext(authContext);
  const [points, setPoints] = useState(0);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(null);

  // const getScore = async () => {
  //   try {
  //     const response = await fetch(`${URI}/api/teams/get-score`, {
  //       method: 'GET',
  //       headers: {
  //         'content-type': 'application/json',
  //         Authorization: `Bearer ${cookies.sid.token}`
  //       },
  //     });

  //     const data = await response.json();

  //     console.log(data.score);
  //     setScore(data.score);
  //     return data.score;
  //   } catch (err) {
  //     console.log('err', err);
  //   }
  // };

  useEffect(()=>{
    async function fetchData() {
      const res = await fetch(`${URI}/api/teams/get-score`, {headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${cookies.sid.token}`
      }});
      res
        .json()
        .then(res => {
          console.log('RES', res)
          setScore(res)
        })
        .catch(err => setErrors(err));
    }

    fetchData();
  }, [])

  if(score) console.log('SCORE', score)

  return (
    <div className="App">
      <nav>
        <ion-icon name="menu-outline"></ion-icon>
        <NavLinks />
      </nav>
      App
    </div>
  );
}

export default App;
