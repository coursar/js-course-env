import './webcomponents/AppLiker';

const API_URL = 'http://localhost:9999';

const rootEl = document.getElementById('root');
const formEl = rootEl.querySelector('[data-id="form"]');
const loaderEl = formEl.querySelector('[data-id="loader"]');
const errorEl = formEl.querySelector('[data-id="error"]');
const fieldsetEl = formEl.querySelector('[data-id="fieldset"]');

errorEl.querySelector('[data-action="retry"]').addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  formEl.dispatchEvent(new SubmitEvent('submit'));
});

formEl.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  // [...formEl.elements].forEach((el) => el.setCustomValidity(''));
  // formEl.checkValidity();
  // // valid -> ValidityState
  // const firstInvalidEl = [...formEl.elements].find((el) => !el.validity.valid);
  // if (firstInvalidEl) {
  //   firstInvalidEl.focus();
  //   firstInvalidEl.setCustomValidity('Поле заполнено неверно');
  //   firstInvalidEl.reportValidity();
  //   return;
  // }

  loaderEl.style.visibility = 'visible';
  errorEl.style.visibility = 'hidden';
  fieldsetEl.disabled = true;

  const file = formEl.elements.image.files[0];

  try {
    const response = await fetch(API_URL, { method: 'POST', body: file });
    if (!response.ok) {
      // TODO: parse response
      throw new Error('not 2xx code');
    }
    const data = await response.json();
    console.log(data.status);
    formEl.reset();
  } catch (e) {
    errorEl.style.visibility = 'visible';
    errorEl.querySelector('[data-id="message"]').textContent = 'Проверьте подключение к сети Интернет';
  } finally {
    loaderEl.style.visibility = 'hidden';
    fieldsetEl.disabled = false;
  }
});
