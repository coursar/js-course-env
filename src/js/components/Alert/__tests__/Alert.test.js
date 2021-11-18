/**
 * @jest-environment jsdom
 */
import { getByText, fireEvent } from '@testing-library/dom';
import createAlert from '..';

test('should render defaults', () => {
  // (A)rrange
  const containerEl = document.createElement('div');

  // (A)ct
  const alertEl = createAlert();
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

test('should remove self from DOM on Close btn click', () => {
  const containerEl = document.createElement('div');
  const onClose = jest.fn();
  const alertEl = createAlert({
    onClose,
  });
  containerEl.appendChild(alertEl);

  const closeEl = getByText(containerEl, 'Close', { exact: false, selector: '[data-action="close"]' });
  fireEvent.click(closeEl);

  expect(onClose).toBeCalledTimes(1);
});
