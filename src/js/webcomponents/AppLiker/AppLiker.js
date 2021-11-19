const template = document.createElement('template');
template.innerHTML = `
<div>
  <span data-id="likes">0</span>
  <button data-action="like">+</button>
  <button data-action="dislike">-</button>
</div>
`;

class AppLiker extends HTMLElement {
  static get observedAttributes() {
    return ['prop'];
  }

  #likesEl;

  #likeButtonEl;

  #dislikeButtonEl;

  #likes = 0;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const tpl = template.content.cloneNode(true);

    this.#likesEl = tpl.querySelector('[data-id="likes"]');
    this.#likeButtonEl = tpl.querySelector('[data-action="like"]');
    this.#dislikeButtonEl = tpl.querySelector('[data-action="dislike"]');

    // this.onLike = this.onLike.bind(this);
    this.#likeButtonEl.addEventListener('click', () => this.onLike());

    shadow.appendChild(tpl);
  }

  onLike() {
    console.log(this);
    this.#likes += 1;
    this.#updateView();
  }

  set likes(val) {
    this.#likes = val;
    this.#updateView();
  }

  get likes() {
    return this.#likes;
  }

  #updateView() {
    this.#likesEl.textContent = `${this.#likes}`;
  }

  connectedCallback() {
    console.log('connected');
  }

  disconnectedCallback() {
    console.log('disconnected');
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attr changed', name, oldVal, newVal);
  }
}

customElements.define('app-liker', AppLiker);

export default AppLiker;
