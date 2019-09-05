import React from 'react';
import {gameTitleEnd} from '../assets';

interface IProps {
}

const EndHeader: React.FC<IProps> = () => {
  const styles = {
    header: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center' as 'center',
      margin: '50px 0'
    },
    image: {
      flex: 1
    }
  };
  
  return (
    <header style={styles.header}>
      <img style={styles.image} src={gameTitleEnd} alt=""/>
    </header>
  );
};

export default EndHeader;
