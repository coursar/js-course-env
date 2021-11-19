const template = document.createElement('template');
template.innerHTML = `
<div>
  <h2 data-id="name"></h2>
  <a data-id="detail-link" href="#">Подробнее</a>
</div>
`;

const createCard = ({
  name,
  onShowDetail,
} = {}) => {
  const elTpl = template.content.cloneNode(true); // DocumentFragment

  const nameEl = elTpl.querySelector('[data-id="name"]');
  nameEl.textContent = name;

  const linkEl = elTpl.querySelector('[data-id="detail-link"]');
  if (typeof onShowDetail === 'function') {
    linkEl.addEventListener('click', onShowDetail);
  }

  return elTpl;
};

export default createCard;
