import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components';
import Dashboard from './pages/Dashboard';
import Game from './pages/Game';
import Page404 from './pages/Page404';
import Auth from './pages/Auth';
import { api, GET_NAVLINKS } from './shared';

function App() {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    const getLinks = async () => {
      const response = await api.get(GET_NAVLINKS);
      setLinks(response.data);
    };

    getLinks();
  }, []);

  return (
    links && (
      <Layout links={links}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/game/:game" component={Game} />
          <Route path="/auth" component={Auth} />
          <Route path="*" component={Page404} />
        </Switch>
      </Layout>
    )
  );
}

export default App;
