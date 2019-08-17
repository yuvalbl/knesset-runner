import React from 'react';
import {Link as RouterLink} from 'react-router-dom';

interface IProps {
}

const characters = ['bibi', 'barak'];

const SelectionComponent: React.FC<IProps> = () => {
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
      {
        characters.map((character:string, i: number) => (
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

export default SelectionComponent;
