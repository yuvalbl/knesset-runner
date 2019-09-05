import React from 'react';
import {gameTitleStart} from '../assets';

interface IProps {
}

const characters = ['bibi', 'barak'];

const StartHeader: React.FC<IProps> = () => {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'center' as 'center',
      margin: '85px 0'
    }
  };
  
  return (
    <header style={styles.header}>
      <img src={gameTitleStart} alt=""/>
    </header>
  );
};

export default StartHeader;
