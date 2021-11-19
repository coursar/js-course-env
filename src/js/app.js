import store from './store';
import { CARDS_LOAD_REQUEST, CARDS_LOAD_SUCCESS } from './store/actionTypes';
import createMainPage from './pages/MainPage';

const rootEl = document.getElementById('root');

rootEl.appendChild(createMainPage());

const cardsHttpData = [
  {
    id: 'afla',
    link: 'https://alfabank.ru/card/alfa',
    name: 'Дебетовая Альфа-Карта',
  },
  {
    id: 'afla-premium',
    link: 'https://alfabank.ru/card/alfa-premium',
    name: 'Дебетовая Альфа-Карта Premium',
  },
];

// first request
setTimeout(() => {
  store.dispatch({
    type: CARDS_LOAD_REQUEST,
    payload: {},
  });
  setTimeout(() => {
    store.dispatch({
      type: CARDS_LOAD_SUCCESS,
      payload: {
        items: [
          {
            id: 'afla',
            link: 'https://alfabank.ru/card/alfa',
            name: 'Дебетовая Альфа-Карта',
          },
          {
            id: 'afla-premium',
            link: 'https://alfabank.ru/card/alfa-premium',
            name: 'Дебетовая Альфа-Карта Premium',
          },
        ],
      },
    });
  }, 5000);
}, 0);

// second request
setTimeout(() => {
  store.dispatch({
    type: CARDS_LOAD_REQUEST,
    payload: {},
  });
  setTimeout(() => {
    store.dispatch({
      type: CARDS_LOAD_SUCCESS,
      payload: {
        items: [
          {
            id: 'afla',
            link: 'https://alfabank.ru/card/alfa',
            name: 'Дебетовая Альфа-Карта',
          },
          {
            id: 'afla-premium',
            link: 'https://alfabank.ru/card/alfa-premium',
            name: 'Дебетовая Альфа-Карта Premium',
          },
          {
            id: 'afla-travel',
            link: 'https://alfabank.ru/card/alfa-travel',
            name: 'Дебетовая Альфа-Карта Travel',
          },
        ],
      },
    });
  }, 5000);
}, 10_000);
