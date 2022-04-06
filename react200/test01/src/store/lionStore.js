import { makeAutoObservable } from "mobx";

class LionStore {
  number = 10;
  constructor(){
    makeAutoObservable(this);
  }
  increase(){this.number+=10;}
  decrease(){this.number-=10;}
}

const lionStore = new LionStore();

export default lionStore;