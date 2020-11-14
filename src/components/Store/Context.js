import { createContext } from 'react';

const StoreContext = createContext({
  toke: null,
  setToken: () => {},
});

export default StoreContext;
