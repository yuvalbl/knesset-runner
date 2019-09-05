import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import StartHeader from '../components/StartHeader';

const characters = ['bibi', 'barak'];

interface IProps {
}

const SelectPage: React.FC<IProps> = () => {
  const classes = {
    container: {
      display: 'flex'
    },
    card: {
      height: 100,
      width: '100%',
      cursor: 'pointer'
    }
  };
  
  return (
    <div>
      <StartHeader/>
      {
        characters.map((character: string, i: number) => (
          <RouterLink to={`/game/${character}`} key={i}>
            <button style={classes.card}>
              Play as {character}
            </button>
          </RouterLink>
        ))
      }
    </div>
  );
};

export default SelectPage;
