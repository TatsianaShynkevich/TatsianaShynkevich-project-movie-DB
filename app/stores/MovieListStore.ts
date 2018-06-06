import { observable} from 'mobx';

class MovieListStore {
  @observable show: boolean;

  constructor() {
    this.show = false;
  }
  
  toggleLeftPanel() {
    this.show = !this.show;
  }
}

export const movieListStore = new MovieListStore();