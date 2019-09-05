import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import GamePage from './pages/GamePage';
import CreditsPage from './pages/CreditsPage';
import {backgroundPattern} from './assets';
import {palette} from './styles';
import SelectPage from './pages/SelectPage';

const App: React.FC = () => {
  const classes = {
    main: {
      dir: 'rtl',
      display: 'flex',
      height: '100%',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      backgroundColor: palette.background,
      backgroundImage: `url(${backgroundPattern})`,
    }
  };
  
  return (
    <main dir="rtl" style={classes.main}>
      <Router>
        <Switch>
          <Route path="/intro" component={IntroPage}/>
          <Route path="/select" component={SelectPage}/>
          <Route path="/credits" component={CreditsPage}/>
          <Route path="/game/:character" component={GamePage}/>
          <Redirect to="/intro"/>
        </Switch>
      </Router>
    </main>
  );
};

export default App;
