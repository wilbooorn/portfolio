import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/main_page';
import AboutPage from './components/about_page';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/home" component={MainPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path = "/" component={MainPage} />
    </Switch>
  </div>
);

export default App;
