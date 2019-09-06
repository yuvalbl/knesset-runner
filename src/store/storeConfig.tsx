// https://mobx-react.js.org/recipes-context

import React from 'react'
import Store from './store';

export const store = new Store();
export const StoreContext = React.createContext(store);

export const useStore = (): Store => {
  const store = React.useContext(StoreContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  // see: https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables
  if(process.env.NODE_ENV === 'development') {
    // @ts-ignore
    window['store'] = store;
  }
  return store
};
