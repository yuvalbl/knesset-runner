import React from 'react';
import {buttonNewGame, creditTitle} from '../assets';
import ImageButton from '../components/ImageButton';
import {useStore} from '../store/storeConfig';

interface IProps {
}

const CreditsPage: React.FC<IProps> = () => {
  const store = useStore();
  
  return (
    <div>
      <p>
        <img src={creditTitle} alt=""/>
      </p>
      <ImageButton imageSrc={buttonNewGame} onClick={() => store.setActivePage('intro')}/>
    </div>
  );
};

export default CreditsPage;
