import React from 'react';
import {bibGodTitle, pressStartSpaceTitle, pressStartTitle, rotationTitle} from '../assets';

const IS_IOS = /iPad|iPhone|iPod/.test(window.navigator.platform);
const IS_MOBILE = /Android|BlackBerry|IEMobile/.test(window.navigator.userAgent) || IS_IOS;

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
      imageSrc = (IS_MOBILE) ? pressStartTitle : pressStartSpaceTitle;
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
