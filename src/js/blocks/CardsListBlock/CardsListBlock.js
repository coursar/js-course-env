import store from '../../store';
import createCard from '../../components/Card';
import createLoader from '../../components/Loader';
import { CARDS_LOAD_REQUEST, CARDS_LOAD_SUCCESS } from '../../store/actionTypes';

const template = document.createElement('template');
template.innerHTML = `
<div data-id="loader"></div>
<div data-id="error"></div>
<ul data-id="cards-container">
</ul>
`;

const createCardsListBlock = () => {
  const elTpl = template.content.cloneNode(true); // DocumentFragment
  const cardsContainerEl = elTpl.querySelector('[data-id="cards-container"]');
  const loaderEl = elTpl.querySelector('[data-id="loader"]');

  const subscription = ({ cards }) => {
    loaderEl.innerHTML = '';
    if (cards.loading) {
      loaderEl.appendChild(createLoader());
    }

    cardsContainerEl.innerHTML = '';
    const itemsEls = cards.items.map(({ name, link }) => createCard({
      name,
      link,
      onShowDetail: () => {
        console.log('show detail');
      },
    }));
    cardsContainerEl.append(...itemsEls);
  };

  store.subscribe(subscription);

  const unsubscribe = () => store.unsubscribe(subscription);

  return { el: elTpl, unsubscribe };
};

export default createCardsListBlock;
