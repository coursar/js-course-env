/* eslint-disable */
import createAlert from './components/Alert';

const rootEl = document.getElementById('root');

// rootEl.appendChild(createAlert({ message: 'error' }));
// rootEl.appendChild(createAlert({
//   message: 'warning',
//   image: 'neutral.svg',
// }));

// publish-subscribe
const counterEl = document.getElementById('counter');
counterEl.$state = {
  _listeners: [],
  _counter: 0,
  _notify: function (prop, newVal, oldVal) {
    for (const listener of this._listeners) {
      listener(prop, newVal, oldVal);
    }
  },
  addListener(listener) {
    if (typeof listener !== 'function') {
      throw new Error('listener should be function');
    }
    this._listeners.push(listener);
  },
  removeListener(forRemove) {
    for (let i = 0; i < this._listeners.length; i += 1) {
      debugger;
      const listener = this._listeners[i];
      if (listener === forRemove) {
        this._listeners.splice(i, 1);
        return true;
      }
    }
    return false;
  },
  get counter() {
    return this._counter;
  },
  set counter(newVal) {
    const oldVal = this._counter;
    this._counter = newVal;
    this._notify('counter', newVal, oldVal);
  },
};
const counterTextUpdate = function (prop, newVal) {
  if (prop === 'counter') {
    counterEl.textContent = newVal;
  }
};
counterEl.$state.addListener(counterTextUpdate);
counterEl.$state.addListener(function (prop, newVal, oldVal) {
  console.log(`prop changed: ${prop}, oldVal: ${oldVal}, newVal: ${newVal}`);
});

const buttonEl = document.getElementById('clicker');
buttonEl.addEventListener('click', function(evt) {
  counterEl.$state.counter += 1;
});

// fn() -> undefined
// new fn() -> {}
// obj.fn() -> obj
// btn.onclick = fn -> btn

