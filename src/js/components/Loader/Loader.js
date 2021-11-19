const template = document.createElement('template');
template.innerHTML = `
<div>
  <img src="loading.svg"> Loading...
</div>
`;

const createLoader = () => template.content.cloneNode(true);

export default createLoader;
