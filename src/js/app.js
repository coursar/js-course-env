const rootEl = document.getElementById('root');

// XSS
const newsContainerEl = rootEl.querySelector('[data-widget="news"]');
const message = 'Some error happened';
const list = `
  <ul>
    <li>First</li>
    <li><button onclick="alert('pwned')">Click me</button></li>
  </ul>
`;

const errorTemplate = `
<div class="alert alert-danger">
  <span data-id="message">${message}</span>
  <img src="js-logo.png" alt="JS Logo">
  ${list}
</div>
`;
newsContainerEl.innerHTML = errorTemplate;
