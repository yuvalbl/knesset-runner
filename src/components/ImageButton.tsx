import React from 'react';

export enum ButtonType {
  Standard,
  Small,
  Character
}

interface IProps {
  imageSrc: any
  type?: ButtonType
  onClick?: Function
  extraStyles?: Object
}

const ImageButton: React.FC<IProps> = ({imageSrc, type = ButtonType.Standard, extraStyles, onClick}) => {
  const styles = {
    button: {
      height: 45, // default
      maxHeight: 'none', // default
      width: 250, // default
      lineHeight: '45px', // default
      border: 0,
      background: 0,
      outline: 0,
      cursor: 'pointer' as 'pointer',
      margin: 5,
      padding: 0
    },
    img: {
      height: 'auto',
      textAlign: 'center' as 'center'
    }
  };
  
  // small / character styles
  switch (type) {
    case ButtonType.Small:
      styles.button.width = 70;
      break;
    case ButtonType.Character:
      styles.button.height = 120;
      styles.button.maxHeight = '20vh';
      styles.button.lineHeight = '100px';
      styles.button.width = 108;
      styles.img.height = '100%';
      break;
    case ButtonType.Standard:
    default:
      break;
  }
  const buttonStyles = {...styles.button, ...extraStyles};
  
  const onClickFn = () => {
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <button style={buttonStyles} onClick={onClickFn}>
      <img style={styles.img} src={imageSrc} alt=""/>
    </button>
  );
};

export default ImageButton;
