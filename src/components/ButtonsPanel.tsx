import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ImageButton, {ButtonType} from './ImageButton';
import {
  buttonCredits,
  buttonNewGame,
  buttonReset,
  buttonShare,
  buttonShareFacebook,
  buttonShareTwitter
} from '../assets';

interface IProps {
  character?: string
}

const ButtonsPanel: React.FC<IProps> = ({character}) => {
  const [showSocialButtons, setShowSocialButtons] = useState(false)
  
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
    <Link to="/select">
      <ImageButton imageSrc={buttonNewGame}/>
    </Link>
  );
  
  const playAgain = (
    <Link to={`/game/${character}`}>
      <ImageButton imageSrc={buttonReset}/>
    </Link>
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
      <Link to="/credits">
        <ImageButton imageSrc={buttonCredits}/>
      </Link>
      {
        showSocialButtons
          ? socialMediaButtons
          : <ImageButton imageSrc={buttonShare} onClick={() => {setShowSocialButtons(true)}}/>
      }
    </div>
  );
};

export default ButtonsPanel;
