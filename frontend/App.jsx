import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/main_page';

const App = () => (
  <div>
    <Switch>
      <Route path = "/" component={MainPage} />
    </Switch>
  </div>
);

export default App;
