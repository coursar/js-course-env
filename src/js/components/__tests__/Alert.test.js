/**
 * @jest-environment jsdom
 */
import createAlert from '../Alert';

test('should render defaults', () => {
  // (A)rrange
  const containerEl = document.createElement('div');

  // (A)ct
  const alertEl = createAlert({});
  containerEl.appendChild(alertEl);

  // (A)ssert
  expect(containerEl).toMatchSnapshot();
});

test('should render args', () => {
  // (A)rrange
  const containerEl = document.createElement('div');

  // (A)ct
  const alertEl = createAlert({
    message: 'Network error',
    image: 'neutral.svg',
  });
  containerEl.appendChild(alertEl);

  // (A)ssert
  expect(containerEl).toMatchSnapshot();
});
