import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ImageButton, {ButtonType} from '../components/ImageButton';
import {bibiColor, bibiGrayScale, buttonYalla, gantzColor, gantzGrayScale, selectCharacterTitle} from '../assets';

const characters = [
  {name: 'bibi', image: bibiGrayScale, imageActive: bibiColor},
  {name: 'gantz', image: gantzGrayScale, imageActive: gantzColor},
];

interface IProps {
}

const SelectPage: React.FC<IProps> = () => {
  const [selected, setSelected] = useState();
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'space-between',
      // width: '100%'
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
      visibility: selected ? 'visible' as 'visible' : 'hidden' as 'hidden',
      cursor: 'pointer'
    }
  };
  
  const selectCharacter = (character: any) => {
    setSelected(character);
  };
  
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={selectCharacterTitle} alt=""/>
      </header>
      <div style={styles.charactersContainer}>
        {
          characters.map((c) => (
            <article style={styles.character} key={c.name}>
              <ImageButton type={ButtonType.Character}
                           imageSrc={(c === selected) ? c.imageActive : c.image}
                           onClick={selectCharacter.bind(null, c)}/>
            </article>
          ))
        }
      </div>
      <div style={styles.yallaButton}>
        <Link to={`/game/${selected ? selected.name : ''}`}>
          <ImageButton imageSrc={buttonYalla}/>
        </Link>
      </div>
    </div>
  );
};

export default SelectPage;
