const alertTpl = document.createElement('template');
alertTpl.innerHTML = `
<div data-widget="alert" class="alert alert-danger">
  <span data-id="message"></span>
  <img data-id="image">
  <button data-action="close" type="button">Close</button>
</div>
`;

const createAlert = ({
  message = '',
  image = 'error.svg',
  onClose,
} = {}) => {
  const el = alertTpl.content.cloneNode(true); // DocumentFragment
  const messageEl = el.querySelector('[data-id="message"]');
  const imageEl = el.querySelector('[data-id="image"]');
  const closeEl = el.querySelector('[data-action="close"]');

  messageEl.textContent = message;
  imageEl.src = image;
  if (typeof onClose === 'function') {
    closeEl.addEventListener('click', onClose);
  }

  return el;
};

export default createAlert;
