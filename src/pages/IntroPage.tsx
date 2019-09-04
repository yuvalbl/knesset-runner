import React, {useState} from 'react';
import {Link} from 'react-router-dom';
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
              Knesset Runner
            </p>
            <button onClick={() => setShowPlayerSelection(true)}>Play</button>
            <Link to="/credits">
              <button>Credits</button>
            </Link>
          </div>
      }
    </div>
  );
};

export default IntroPage;
