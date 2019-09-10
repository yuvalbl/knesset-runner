import React from 'react';
import {buttonYouDigYou, creditTitle} from '../assets';
import ImageButton from '../components/ImageButton';
import {useStore} from '../store/storeConfig';
import MessageBox from '../components/MessageBox';

interface IProps {
}

const CreditsPage: React.FC<IProps> = () => {
  const store = useStore();
  const goBackPage = (store.activeCharacter) ? 'game-end' :  'intro';
  
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
            גיל הוא מעצב גרפי, שחקן ספסל ואמן אורז.
            הוא אוהב לרקוד לצלילי אה-גה-דו, לפהק דרך הפופיק ולקרוא לילד בשמו.
            אפשר להטריד אותו ב
            <a href="http://facebook.com/grandcohen" target="_blank" rel="noopener noreferrer">פייסבוק</a> וב
            <a href="http://instagram.com/flying_eggplant" target="_blank" rel="noopener noreferrer">אינסטגרם</a> או
            לצפות בסרטונים שהוא מעלה ל
            <a href="http://youtube.com/gilcohen1" target="_blank" rel="noopener noreferrer">יוטיוב</a>
            .
          </p>
          <p>
            יובל הוא שאמן מתקופת אגוז המוסקט. הוא מנשק קמעות ושוחה חתירה ללא מצופים.
            בשאר הזמן הוא&nbsp;
            <a href="https://www.linkedin.com/in/yuval-bar-levi-70677748/" target="_blank"
               rel="noopener noreferrer">עוסק</a> ב
            <a href="https://github.com/yuvalbl/knesset-runner" target="_blank" rel="noopener noreferrer">תכנות אמנותי</a> חצי אולימפי,
            ומטריל מלפפוני ים ב
            <a href="https://www.facebook.com/yuval.b.levy" target="_blank" rel="noopener noreferrer">פייסבוק</a>
            .
          </p>
          <p>
            תודות:<br/>
            בורא עולם המים בטורונטו, ז׳ן קלוד ואן דם המכבים והמעצב מאיר סדן (
            <a href="https://oketz.com/" target="_blank" rel="noopener noreferrer">העוקץ</a>
            ) שיצר את הפונט הנפלא הזה.
          </p>
        </div>
      </MessageBox>
      <ImageButton imageSrc={buttonYouDigYou} onClick={() => store.setActivePage(goBackPage)}/>
    </div>
  );
};

export default CreditsPage;
