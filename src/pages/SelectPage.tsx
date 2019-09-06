import React from 'react';
import ImageButton, {ButtonType} from '../components/ImageButton';
import {bibiColor, bibiGrayScale, buttonYalla, gantzColor, gantzGrayScale, selectCharacterTitle} from '../assets';
import {useStore} from '../store/storeConfig';
import {ICharacter} from '../store/store';
import {useObserver} from 'mobx-react-lite';

const characters: Array<ICharacter> = [
  {name: 'bibi', image: bibiGrayScale, imageActive: bibiColor},
  {name: 'gantz', image: gantzGrayScale, imageActive: gantzColor},
];

interface IProps {
}

const SelectPage: React.FC<IProps> = () => {
  const store = useStore();
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'space-between',
    },
    header: {
      margin: '40px 0 20px',
    },
    charactersContainer: {
      display: 'flex',
      flexWrap: 'wrap' as 'wrap',
      justifyContent: 'space-between',
    },
    character: {
      flex: '0, 1 49%',
      cursor: 'pointer'
    },
    yallaButton: {
      visibility: store.activeCharacter ? 'visible' as 'visible' : 'hidden' as 'hidden',
      cursor: 'pointer'
    }
  };

  const isCharacterSelected = (character: ICharacter) => {
    return store.activeCharacter && character.name === store.activeCharacter.name
  };
  
  return useObserver(() => (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={selectCharacterTitle} alt=""/>
      </header>
      <div style={styles.charactersContainer}>
        {
          characters.map((c) => (
            <article style={styles.character} key={c.name}>
              <ImageButton type={ButtonType.Character}
                           imageSrc={isCharacterSelected(c) ? c.imageActive : c.image}
                           onClick={() => store.setActiveCharacter(c)}/>
            </article>
          ))
        }
      </div>
      <div style={styles.yallaButton}>
        <ImageButton imageSrc={buttonYalla} onClick={() => {
          store.setActivePage('game')
        }}/>
      </div>
    </div>
  ));
};

export default SelectPage;
