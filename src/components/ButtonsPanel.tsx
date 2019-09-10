import React, {useState} from 'react';
import ImageButton, {ButtonType} from './ImageButton';
import {
  buttonCredits,
  buttonNewGame,
  buttonReplaceCharacter,
  buttonReset,
  buttonShare,
  buttonShareFacebook,
  buttonShareTwitter, buttonShareWhatsApp
} from '../assets';
import {useStore} from '../store/storeConfig';

interface IProps {
}

const ButtonsPanel: React.FC<IProps> = () => {
  const [showSocialButtons, setShowSocialButtons] = useState(false);
  const store = useStore();
  const character = store.activeCharacter;
  const shareUrl = window.location.href;
  const shareText = 'המירוץ לכנסת - המשחק שיגרום לפוליטיקאים לרוץ בשבילכם';
  
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
      <a target="_blank" rel="noopener noreferrer"
         href={encodeURI(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`)}>
        <ImageButton imageSrc={buttonShareFacebook} type={ButtonType.Small}/>
      </a>
      <a target="_blank" rel="noopener noreferrer"
         href={encodeURI(`whatsapp://send?text=${shareText} : ${shareUrl}`)} data-action="share/whatsapp/share">
        <ImageButton imageSrc={buttonShareWhatsApp} type={ButtonType.Small}/>
      </a>
      <a target="_blank" rel="noopener noreferrer"
         href={encodeURI(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`)}>
        <ImageButton imageSrc={buttonShareTwitter} type={ButtonType.Small}/>
      </a>
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
