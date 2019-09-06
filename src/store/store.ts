import {action, observable} from 'mobx';

export interface ICharacter {
  name: string;
  image: any;
  imageActive: any;
}

export type pageType = 'intro' | 'select' | 'game' | 'game-end' | 'credits'

export default class Store {
  @observable activePage: pageType = 'intro';
  @observable activeCharacter: ICharacter | null = null;
  @observable votes: number = 0;
  
  @action
  setVotes(votes: number) {
    this.votes = votes;
  }
  
  @action
  setActiveCharacter(character: ICharacter) {
    this.activeCharacter = character;
  }
  
  @action
  setActivePage(page: pageType) {
    this.activePage = page;
  }
}
