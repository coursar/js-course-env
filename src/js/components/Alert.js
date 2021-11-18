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

export default createAlert;
