import createCardsListBlock from '../../blocks/CardsListBlock';
import createHeaderBlock from '../../blocks/HeaderBlock';
import links from '../../links';

const template = document.createElement('template');
template.innerHTML = `
<header data-section="header"></header>
<main data-section="main"></main>
<aside data-section="aside"></aside>
<footer data-section="footer"></footer>
`;

const createMainPage = () => {
  const elTpl = template.content.cloneNode(true); // DocumentFragment

  const headerEl = elTpl.querySelector('[data-section="header"]');
  headerEl.appendChild(createHeaderBlock({
    links,
  }));

  const mainEl = elTpl.querySelector('[data-section="main"]');
  const component = createCardsListBlock();
  mainEl.appendChild(component.el);
  // TODO: если MainPage захочет удалить CardListBlock

  return elTpl;
};

export default createMainPage;
