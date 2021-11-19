import './webcomponents/AppLiker';

const rootEl = document.getElementById('root');

rootEl.innerHTML = `
  <app-liker prop="top-secret"></app-liker>
`;

const appLikerEl = rootEl.firstElementChild;
// appLikerEl.setAttribute('prop', 'secret');

setTimeout(() => {
  appLikerEl.likes = 10;
}, 5_000);
