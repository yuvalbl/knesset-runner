import React from 'react';
import ButtonsPanel from '../components/ButtonsPanel';
import StartHeader from '../components/StartHeader';
import ResourcePreLoader from '../components/ResourcePreLoader';

interface IProps {
}

const IntroPage: React.FC<IProps> = () => {
  return (
    <>
      <StartHeader/>
      <ButtonsPanel/>
      <ResourcePreLoader/>
    </>
  );
};

export default IntroPage;
