import React, {CSSProperties} from 'react';
import {palette} from '../styles';

interface IProps {
  extraStyles?: CSSProperties
}

const MessageBox: React.FC<IProps> = ({children, extraStyles}) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center' as 'center',
      color: palette.actionBlue,
      ...extraStyles
    },
    line: {
      height: '2vh',
      width: 'calc(100% - 4vh)',
      backgroundColor: palette.messageBackground
    },
    content: {
      width: '100%',
      backgroundColor: palette.messageBackground
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.line}/>
      <div style={styles.content}>{children}</div>
      <div style={styles.line}/>
    </div>
  );
};

export default MessageBox;
