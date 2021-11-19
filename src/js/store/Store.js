import { CARDS_LOAD_FAIL, CARDS_LOAD_REQUEST, CARDS_LOAD_SUCCESS } from './actionTypes';

class Store {
  #state;

  #subscribers = [];

  constructor(initial = {}) {
    this.#state = initial;
  }

  subscribe(subscriber) {
    this.#subscribers = [...this.#subscribers, subscriber];
    subscriber(this.#state);
  }

  unsubscribe(subscriber) {
    this.#subscribers = this.#subscribers.filter((el) => el !== subscriber);
  }

  dispatch(action) {
    this.#state = this.#reduce(action);
    this.#notify();
  }

  // action:
  //   type - string
  //   payload - items[]
  #reduce(action) {
    switch (action.type) {
      case CARDS_LOAD_REQUEST:
        return {
          ...this.#state,
          cards: {
            ...this.#state.cards,
            loading: true,
            error: null,
          },
        };
      case CARDS_LOAD_SUCCESS:
        return {
          ...this.#state,
          cards: {
            ...this.#state.cards,
            loading: false,
            error: null,
            items: action.payload.items,
          },
        };
      case CARDS_LOAD_FAIL:
        return {
          ...this.#state,
          cards: {
            ...this.#state.cards,
            loading: false,
            error: action.payload.error,
            items: [],
          },
        };
      default:
        return this.#state;
    }
  }

  #notify() {
    this.#subscribers.forEach((el) => el(this.#state));
  }
}

export default Store;

/*
[#1, #2, #3]
diff
[#1, #2, #3, #4] appendChild(#4)

[#1, #2, #3]
diff
[#1, #3] removeChild(#2)

update position
[#1, #2, #3]
diff
[#3, #1, #2] insertBefore(#3, #1)

update position
[#1, #2, #3]
diff
[#1', #2, #3] update #1
*/
