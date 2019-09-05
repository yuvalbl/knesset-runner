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
      height: 54, // default
      width: 300, // default
      border: 0,
      background: 0,
      outline: 0,
      marginBottom: 5,
      cursor: 'pointer' as 'pointer'
    },
  };
  
  // small / character styles
  switch (type) {
    case ButtonType.Small:
      styles.button.height = 54;
      styles.button.width = 140;
      break;
    case ButtonType.Character:
      styles.button.height = 120;
      styles.button.width = 120;
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
      <img src={imageSrc}/>
    </button>
  );
};

export default ImageButton;
