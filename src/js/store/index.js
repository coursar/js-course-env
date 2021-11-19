import Store from './Store';

const store = new Store({
  cards: {
    loading: false,
    error: null,
    items: [],
  },
});

export default store;
