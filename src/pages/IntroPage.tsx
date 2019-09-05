import React, {useState} from 'react';
import ButtonsPanel from '../components/ButtonsPanel';
import StartHeader from '../components/StartHeader';

interface IProps {
}

const IntroPage: React.FC<IProps> = () => {
  const [showPlayerSelection, setShowPlayerSelection] = useState(false);
  
  
  return (
    <div>
      <StartHeader/>
      <ButtonsPanel/>
    </div>
  );
};

export default IntroPage;
