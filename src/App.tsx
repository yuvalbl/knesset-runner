import React from 'react';
import './App.css';
import IntroPage from './pages/IntroPage';
import GamePage from './pages/GamePage';
import CreditsPage from './pages/CreditsPage';
import {backgroundPattern} from './assets';
import {palette} from './styles';
import SelectPage from './pages/SelectPage';
import EndGamePage from './pages/EndGamePage';
import {store, StoreContext} from './store/storeConfig';
import {useObserver} from 'mobx-react-lite';

const App: React.FC = () => {
  const classes = {
    main: {
      dir: 'rtl',
      display: 'flex',
      height: '100%',
      minHeight: '100vh',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      backgroundColor: palette.background,
      backgroundImage: `url(${backgroundPattern})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  };
  
  let page: React.ComponentElement<any, any>;
  useObserver(() => {
    switch (store.activePage) {
      case 'select':
        page = <SelectPage/>; break;
      case 'game':
        page = <GamePage/>; break;
      case 'game-end':
        page = <EndGamePage/>; break;
      case 'credits':
        page = <CreditsPage/>; break;
      case 'intro':
      default:
        page = <IntroPage/>; break;
    }
  });
  
  return useObserver(() => (
    <StoreContext.Provider value={store}>
      <main dir="rtl" id="main" style={classes.main}>
        {page}
      </main>
    </StoreContext.Provider>
  ));
};

export default App;
