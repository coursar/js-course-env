const template = document.createElement('template');
template.innerHTML = `
<nav>
  <ul data-id="links-container">
  </ul>
</nav>
`;

const linkTemplate = document.createElement('template');
linkTemplate.innerHTML = `
<li data-id="link-container">
  <a href="#" data-id="link"></a>
</li>
`;

const createHeaderBlock = ({
  links = [],
} = {}) => {
  const elTpl = template.content.cloneNode(true); // DocumentFragment
  const linksContainerEl = elTpl.querySelector('[data-id="links-container"]');

  /* eslint-disable */
  for (const {href, text} of links) {
    const linkTpl = linkTemplate.content.cloneNode(true);

    const linkEl = linkTpl.querySelector('[data-id="link"]');
    linkEl.href = href;
    linkEl.textContent = text;

    linksContainerEl.appendChild(linkTpl);
  }

  return elTpl;
};

export default createHeaderBlock;
