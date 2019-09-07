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
    },
    p1: {
      fontSize: 20,
      margin: '.2em 0'
    },
    p2: {
      fontSize: 30,
      margin: '.2em 0'
    },
    p3: {
      fontSize: 20,
      margin: '.2em 0'
    },
    p4: {
      fontSize: 16,
      margin: '1em 0 .3em'
    },
  };
  
  const mandateStr = `${mandate} מנדטים`;
  const votesStr = `${votes} קולות`;
  return (
    <>
      <EndHeader/>
      <MessageBox extraStyles={styles.messageBox}>
        <p style={styles.p1}>אספת</p>
        <p style={styles.p2}>{mandateStr}</p>
        <p style={styles.p3}>( {votesStr} )</p>
        <p style={styles.p4}>עם ישראל גאה בך</p>
      </MessageBox>
      <ButtonsPanel/>
    </>
  );
};

export default EndGamePage;
