/**
 * @jest-environment jsdom
 */

import '../AppLiker';

test('should render liker', () => {
  const containerEl = document.createElement('div');
  const likerEl = document.createElement('app-liker');
  containerEl.appendChild(likerEl);
  expect(likerEl.shadowRoot.children).toMatchSnapshot();

  likerEl.shadowRoot.querySelector('button[data-action="like"]').click();
  expect(likerEl.likes).toBe(1);
});
