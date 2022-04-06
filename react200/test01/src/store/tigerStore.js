import { makeAutoObservable } from "mobx";

class TigerStore {
  count = 0;
  constructor(){
    makeAutoObservable(this);
  }
  increase(){this.count+=1;}
  decrease(){this.count-=1;}
}

const tigerStore = new TigerStore();

export default tigerStore;