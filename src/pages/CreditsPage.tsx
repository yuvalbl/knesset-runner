import React from 'react';
import {buttonNewGame, creditTitle} from '../assets';
import ImageButton from '../components/ImageButton';
import {useStore} from '../store/storeConfig';
import MessageBox from '../components/MessageBox';

interface IProps {
}

const CreditsPage: React.FC<IProps> = () => {
  const store = useStore();
  
  const styles = {
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center' as 'center',
    },
    header: {
      margin: '40px 0 0',
      width: '90%'
    },
    messageBox: {
      margin: 20,
    },
    messageBoxContent: {
      padding: 20,
    }
  };
  
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={creditTitle} alt=""/>
      </header>
      <MessageBox extraStyles={styles.messageBox}>
        <div style={styles.messageBoxContent}>
          <p>
            המירוץ לכנסת עוצב, נבנה והועלה למרשתת ע״י חיות המשק - גיל כהן ויובל בר לוי.
          </p>
          <p>
            גיל כהן הוא מעצב, שחקן ואמן אורז.
            הוא אוהב לרקוד לצלילי אה-גה-דו, לטוס להופעות של כוכבי לכת ולקרוא לילד בשמו.
            אפשר להטריד אותו בפייסבוק ובאינסטגרם או לצפות במערכונים שהוא מעלה ליוטיוב.
          </p>
          <p>
            יובל בר לוי הוא שאמן מתקופת אגוז המוסקט. הוא מנשק קמעות ושוחה חתירה ללא מצופים.
            בשאר הזמן הוא עוסק בתכנות אמנותי חצי אולימפי, ומטריל מלפפוני ים בפייסבוק.
          </p>
          <p>
            תודות נוספות:
            בורא עולם המים בטורונטו, ז׳ן קלוד ואן דם המכבים והמעצב מאיר סדן (העוקץ) שיצר את הפונט הנפלא הזה.
          </p>
        </div>
      </MessageBox>
      <ImageButton imageSrc={buttonNewGame} onClick={() => store.setActivePage('intro')}/>
    </div>
  );
};

export default CreditsPage;
