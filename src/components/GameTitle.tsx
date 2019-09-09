import React from 'react';
import {bibGodTitle, pressStartTitle, rotationTitle} from '../assets';

export enum TITLE {
  none,
  init,
  rotation,
  godMode
}

interface IProps {
  title: TITLE
}

const GameTitle: React.FC<IProps> = ({title}) => {
  const styles = {
    image: {
      width: '100%',
    }
  };
  
  let imageSrc = '';
  switch (title) {
    case TITLE.init:
      imageSrc = pressStartTitle;
      break;
    
    case TITLE.godMode:
      imageSrc = bibGodTitle;
      break;
    
    case TITLE.rotation:
      imageSrc = rotationTitle;
      break;
    
    default:
      imageSrc = '';
      break;
  }
  console.log('imageSrc', imageSrc);
  return (
    <>
      {
        imageSrc !== '' &&
        <img style={styles.image} src={imageSrc} alt=""
             className={title === TITLE.rotation ? 'blink' : ''}/>
      }
    </>
  );
};

export default GameTitle;
