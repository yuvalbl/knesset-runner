import React from 'react';
import './App.css';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import GamePage from './pages/GamePage';
import CreditsPage from './pages/CreditsPage';

const App: React.FC = () => {
  const classes = {
    main: {
      dir: 'rtl',
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center'
    }
  };
  
  return (
    <main dir="rtl" style={classes.main}>
      <Router>
        <Switch>
          <Route path="/intro" component={IntroPage}/>
          <Route path="/credits" component={CreditsPage}/>
          <Route path="/game/:character" component={GamePage}/>
          <Redirect to="/intro"/>
        </Switch>
      </Router>
    </main>
  );
};

export default App;
