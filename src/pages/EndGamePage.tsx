import React from 'react';
import ButtonsPanel from '../components/ButtonsPanel';
import EndHeader from '../components/EndHeader';
import {useStore} from '../store/storeConfig';
import MessageBox from '../components/MessageBox';
import {ICharacter} from '../store/store';
import {getSummaryByMandates} from '../services/summary.message.service';

const VOTES_PER_MANDATE = 32000;

interface IProps {
}

const EndGamePage: React.FC<IProps> = () => {
  const store = useStore();
  const votes = store.votes;
  const mandate = Math.floor(votes / VOTES_PER_MANDATE);
  const isBibi = store.activeCharacter && store.activeCharacter.name === 'bibi';
  const character = (store.activeCharacter as ICharacter).name;
  
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
      margin: '1em 1.2em'
    },
    bibiText: {
      fontSize: 20,
      margin: '.2em 0'
    }
  };
  
  const mandateStr = `${mandate} מנדטים`;
  const votesStr = `${votes} קולות`;
  const summaryByMandates = (isBibi) ? '' : getSummaryByMandates(mandate, character);
  
  const messageNormal = (
    <>
      <p style={styles.p1}>אספת</p>
      <p style={styles.p2}>{mandateStr}</p>
      <p style={styles.p3}>( {votesStr} )</p>
      <p style={styles.p4}>{summaryByMandates}</p>
    </>
  );
  
  const messageBibi = (
    <>
      <p style={styles.bibiText}>לא משנה כמה
        <br/>
        מנדטים קיבלתם,</p>
      <p style={styles.bibiText}>אתם ביבי</p>
    </>
  );
  
  return (
    <>
      <EndHeader/>
      <MessageBox extraStyles={styles.messageBox}>
        {
          isBibi ? messageBibi : messageNormal
        }
      </MessageBox>
      <ButtonsPanel/>
    </>
  );
};

export default EndGamePage;
