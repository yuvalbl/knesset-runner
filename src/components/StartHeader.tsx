import React from 'react';
import {gameTitleStart} from '../assets';

interface IProps {
}

const StartHeader: React.FC<IProps> = () => {
  const styles = {
    header: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center' as 'center',
      margin: '85px 0',
      maxHeight: 400,
    },
    image: {
      flex: 1
    }
  };
  
  return (
    <header style={styles.header}>
      <img style={styles.image} src={gameTitleStart} alt=""/>
    </header>
  );
};

export default StartHeader;
