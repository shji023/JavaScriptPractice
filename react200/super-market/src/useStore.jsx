import { counter } from './stores/counter';
import { market } from './stores/market';

const useStore = () => {
  return { counter, market };
};

export default useStore;