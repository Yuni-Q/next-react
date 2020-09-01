import { observable } from 'mobx';

class Store {
	// eslint-disable-next-line prettier/prettier
  @observable count = 20;
}

const store = new Store();

export default store;
