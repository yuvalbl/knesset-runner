import React, {useState} from 'react';
import ButtonsPanel from '../components/ButtonsPanel';
import EndHeader from '../components/EndHeader';
import {RouteComponentProps} from 'react-router';
import {RParams} from './GamePage';

export type RParams = {
  character: string,
  votes: string
};

interface IProps {
}

const EndGamePage: React.FC<IProps & RouteComponentProps<RParams>> = ({match}) => {
  const character = match.params.character;
  console.log(match.params);
  // @ts-ignore
  const votes = match.params.votes;
  
  const votesStr = `קיבלת ${votes} קולות`;
  return (
    <>
      <EndHeader/>
      <p>{votesStr}</p>
      <ButtonsPanel character={character}/>
    </>
  );
};

export default EndGamePage;
