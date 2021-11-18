const rootEl = document.getElementById('root');

const alertTpl = document.createElement('template');
alertTpl.innerHTML = `
<div class="alert alert-danger">
  <span data-id="message"></span>
  <img data-id="image">
</div>
`;

const createAlert = function ({
  message = '',
  image = 'error.svg',
}) {
  const el = alertTpl.content.cloneNode(true);
  const messageEl = el.querySelector('[data-id="message"]');
  const imageEl = el.querySelector('[data-id="image"]');

  messageEl.textContent = message;
  imageEl.src = image;

  return el;
};

rootEl.appendChild(createAlert({ message: 'error' }));
rootEl.appendChild(createAlert({
  message: 'warning',
  image: 'neutral.svg',
}));

// destructuring
const card = {
  id: 1,
  name: 'alfa',
  percent: 3,
};

// const id = card.id;
// const name = card.name;
const { id, hot = false } = card;
console.log(id, hot);
