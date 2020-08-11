import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components';
import Dashboard from './pages/Dashboard';
import Game from './pages/Game';
import Page404 from './pages/Page404';
import Auth from './pages/Auth';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/game/:game" component={Game} />
        <Route path="/auth" component={Auth} />
        <Route path="*" component={Page404} />
      </Switch>
    </Layout>
  );
}

export default App;
