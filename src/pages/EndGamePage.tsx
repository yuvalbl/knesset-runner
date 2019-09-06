import React from 'react';
import ButtonsPanel from '../components/ButtonsPanel';
import EndHeader from '../components/EndHeader';
import {backgroundBubble} from '../assets';
import {palette} from '../styles';
import {useStore} from '../store/storeConfig';

interface IProps {
}

const EndGamePage: React.FC<IProps> = () => {
  const store = useStore();
  const votes = store.votes;
  const mandate = Math.floor(votes / 1000);
  
  const styles = {
    messageBox: {
      backgroundImage: `url(${backgroundBubble})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      minWidth: '80vw',
      marginBottom: 30,
      padding: 10,
      textAlign: 'center'  as 'center',
      color: palette.actionBlue
    }
  };
  
  const mandateStr = `${mandate} מנדטים`;
  const votesStr = `${votes} קולות`;
  return (
    <>
      <EndHeader/>
      <div style={styles.messageBox}>
        <p>אספת</p>
        <p>{mandateStr}</p>
        <p>( {votesStr} )</p>
        <p>עם ישראל גאה בך</p>
      </div>
      <ButtonsPanel/>
    </>
  );
};

export default EndGamePage;
