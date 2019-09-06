import React from 'react';
import ButtonsPanel from '../components/ButtonsPanel';
import EndHeader from '../components/EndHeader';
import {useStore} from '../store/storeConfig';
import MessageBox from '../components/MessageBox';

interface IProps {
}

const EndGamePage: React.FC<IProps> = () => {
  const store = useStore();
  const votes = store.votes;
  const mandate = Math.floor(votes / 12000);
  
  const styles = {
    messageBox: {
      minWidth: '80vw',
      marginBottom: 30,
      textAlign: 'center' as 'center',
    }
  };
  
  const mandateStr = `${mandate} מנדטים`;
  const votesStr = `${votes} קולות`;
  return (
    <>
      <EndHeader/>
      <MessageBox extraStyles={styles.messageBox}>
        <p>אספת</p>
        <p>{mandateStr}</p>
        <p>( {votesStr} )</p>
        <p>עם ישראל גאה בך</p>
      </MessageBox>
      <ButtonsPanel/>
    </>
  );
};

export default EndGamePage;
