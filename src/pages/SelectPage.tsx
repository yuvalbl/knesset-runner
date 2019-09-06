import React from 'react';
import ImageButton, {ButtonType} from '../components/ImageButton';
import {
  bibiColor,
  bibiGrayScale,
  buttonYalla, deriColor,
  deriGrayScale,
  gantzColor,
  gantzGrayScale, libermanColor, libermanGrayScale, peretzColor, peretzGrayScale,
  selectCharacterTitle, shafirColor, shafirGrayScale, shakedColor, shakedGrayScale, udaColor, udaGrayScale
} from '../assets';
import {useStore} from '../store/storeConfig';
import {ICharacter} from '../store/store';
import {useObserver} from 'mobx-react-lite';

const characters: Array<ICharacter> = [
  {name: 'bibi', image: bibiGrayScale, imageActive: bibiColor},
  {name: 'gantz', image: gantzGrayScale, imageActive: gantzColor},
  {name: 'deri', image: deriGrayScale, imageActive: deriColor},
  {name: 'liberman', image: libermanGrayScale, imageActive: libermanColor},
  {name: 'peretz', image: peretzGrayScale, imageActive: peretzColor},
  {name: 'shafir', image: shafirGrayScale, imageActive: shafirColor},
  {name: 'shaked', image: shakedGrayScale, imageActive: shakedColor},
  {name: 'uda', image: udaGrayScale, imageActive: udaColor},
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
      maxWidth: 250
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
