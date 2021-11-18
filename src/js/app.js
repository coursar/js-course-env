import createAlert from './components/Alert';

const rootEl = document.getElementById('root');

rootEl.appendChild(createAlert({ message: 'error' }));
rootEl.appendChild(createAlert({
  message: 'warning',
  image: 'neutral.svg',
}));
