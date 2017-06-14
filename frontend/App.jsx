import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/main_page';
import AboutPage from './components/about_page';
import Resume from './components/resume'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/home" component={MainPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/portfolio" component={MainPage} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path = "/" component={MainPage} />
    </Switch>
  </div>
);

export default App;
