export class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._list = document.querySelector(selector);
  }

  renderItems() {
    this._items.forEach((item) => this.addItem(item));
  }

  addElement(element) {
    this._list.prepend(element);
  }

  addItem(data) {
    const element = this._renderer(data);
    this.addElement(element);
  }
}
