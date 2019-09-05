import React, {useState} from 'react';
import ButtonsPanel from '../components/ButtonsPanel';
import StartHeader from '../components/StartHeader';

interface IProps {
}

const IntroPage: React.FC<IProps> = () => {
  return (
    <>
      <StartHeader/>
      <ButtonsPanel/>
    </>
  );
};

export default IntroPage;
