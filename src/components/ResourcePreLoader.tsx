import React from 'react';
import {preLoad} from '../assets';

interface IProps {
}

const ResourcePreLoader: React.FC<IProps> = () => {
  const styles = {
    container: {
      display: 'none',
    }
  };
  
  return (
    <div style={styles.container}>
      {
        preLoad.map((image: string, index: number) => (
          <img key={index} src={image} alt=""/>)
        )
      }
    </div>
  );
};

export default ResourcePreLoader;
