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
  {name: 'gantz', image: gantzGrayScale, imageActive: gantzColor},
  {name: 'shafir', image: shafirGrayScale, imageActive: shafirColor},
  {name: 'bibi', image: bibiGrayScale, imageActive: bibiColor},
  {name: 'deri', image: deriGrayScale, imageActive: deriColor},
  {name: 'shaked', image: shakedGrayScale, imageActive: shakedColor},
  {name: 'peretz', image: peretzGrayScale, imageActive: peretzColor},
  {name: 'liberman', image: libermanGrayScale, imageActive: libermanColor},
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
      margin: '20px 0 10px',
      textAlign: 'center' as 'center',
    },
    headerImg: {
      height: 25,
    },
    charactersContainer: {
      display: 'flex',
      flexWrap: 'wrap' as 'wrap',
      justifyContent: 'space-between',
      maxWidth: 270
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
        <img style={styles.headerImg} src={selectCharacterTitle} alt=""/>
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
