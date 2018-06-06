import { observable} from 'mobx';

class MenuStore {
  @observable show: boolean;

  constructor() {
    this.show = false;
  }
  
  toggleLeftPanel() {
    this.show = !this.show;
  }
}

export const menuStore = new MenuStore();