import createCard from '../../components/Card';
import createLoader from '../../components/Loader';

const template = document.createElement('template');
template.innerHTML = `
<div data-id="loader"></div>
<ul data-id="cards-container">
</ul>
`;

const cards = [
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

const createCardsListBlock = () => {
  const elTpl = template.content.cloneNode(true); // DocumentFragment
  const cardsContainerEl = elTpl.querySelector('[data-id="cards-container"]');
  const loaderEl = elTpl.querySelector('[data-id="loader"]');

  loaderEl.appendChild(createLoader());

  const onRemoveItem = (evt, card) => {
    console.log(evt);
    const index = cards.indexOf(card);
    if (index === -1) {
      return;
    }

    cards.splice(index, 1);
    /* eslint-disable */
    cardsContainerEl.innerHTML = '';
    for (const card of cards) {
      const {id, name, link} = card;
      const cardEl = createCard({
        name,
        link,
        onShowDetail: (evt) => {
          evt.preventDefault();
          onRemoveItem(evt, card);
        },
      });
      cardsContainerEl.appendChild(cardEl);
    }
  };

  setTimeout(() => {
    loaderEl.innerHTML = '';

    /* eslint-disable */
    for (const card of cards) {
      const {id, name, link} = card;
      const cardEl = createCard({
        name,
        link,
        onShowDetail: (evt) => {
          evt.preventDefault();
          onRemoveItem(evt, card);
        },
      });
      cardsContainerEl.appendChild(cardEl);
    }

  }, 5000);

  return elTpl;
};

export default createCardsListBlock;

