import createAlert from './components/Alert';

const rootEl = document.getElementById('root');
const alertEl = createAlert({
  message: 'error',
  onClose: () => {
    rootEl.removeChild(alertEl);
  },
});

rootEl.appendChild(
  alertEl,
);
