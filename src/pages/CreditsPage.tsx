import React from 'react';
import {Link} from 'react-router-dom';

interface IProps {
}

const CreditsPage: React.FC<IProps> = () => {
  return (
    <div>
      <p>
        חמודי ובניו
      </p>
      <Link to="/intro">
        <button>בוא נשחק כבר</button>
      </Link>
    </div>
  );
};

export default CreditsPage;
