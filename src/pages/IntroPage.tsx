import React, {useState} from 'react';
import SelectionComponent from '../components/SelectionComponent';

interface IProps {
}

const IntroPage: React.FC<IProps> = () => {
  const [showPlayerSelection, setShowPlayerSelection] = useState(false);
  
  
  return (
    <div>
      {
        showPlayerSelection
          ? <SelectionComponent/>
          :
          <div>
            <p>
              Knesset Runner is just 4 fun
            </p>
            <button onClick={() => setShowPlayerSelection(true)}>OK</button>
          </div>
      }
    </div>
  );
};

export default IntroPage;
