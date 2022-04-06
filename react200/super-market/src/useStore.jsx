import { counter } from './stores/counter';
import { market } from './stores/market';
import React from 'react';
import {storeContext} from './Context';
const useStore = () => {
  // return { counter, market,getApi };
  const store = React.useContext(storeContext);
  if(!store) {
    throw new Error("useStore must be used within a StoreProvdier");
  }
  return store;
};

export default useStore;