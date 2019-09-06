import React, {useState} from 'react';
import ImageButton, {ButtonType} from './ImageButton';
import {
  buttonCredits,
  buttonNewGame,
  buttonReplaceCharacter,
  buttonReset,
  buttonShare,
  buttonShareFacebook,
  buttonShareTwitter
} from '../assets';
import {useStore} from '../store/storeConfig';

interface IProps {
}

const ButtonsPanel: React.FC<IProps> = () => {
  const [showSocialButtons, setShowSocialButtons] = useState(false);
  const store = useStore();
  const character = store.activeCharacter;
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column'
    },
    socialMedia: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
  
  const playFirst = (
      <ImageButton imageSrc={buttonNewGame} onClick={() => store.setActivePage('select')}/>
  );
  
  const playAgain = (
    <>
      <ImageButton imageSrc={buttonReset} onClick={() => store.setActivePage('game')}/>
      <ImageButton imageSrc={buttonReplaceCharacter} onClick={() => store.setActivePage('select')}/>
    </>
  );
  
  const socialMediaButtons = (
    <div style={styles.socialMedia}>
      <ImageButton imageSrc={buttonShareFacebook} type={ButtonType.Small}/>
      <ImageButton imageSrc={buttonShareTwitter} type={ButtonType.Small}/>
    </div>
  );
  
  return (
    <div style={styles.container}>
      {
        character
          ? playAgain
          : playFirst
      }
      <ImageButton imageSrc={buttonCredits} onClick={() => store.setActivePage('credits')}/>
      {
        showSocialButtons
          ? socialMediaButtons
          : <ImageButton imageSrc={buttonShare} onClick={() => {setShowSocialButtons(true)}}/>
      }
    </div>
  );
};

export default ButtonsPanel;
