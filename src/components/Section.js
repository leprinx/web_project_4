class Section {
    constructor({ renderer }, classSelector) {
        this._renderer = renderer;
        this._classSelector = document.querySelector(classSelector);
    }
    renderItems(items) {
        items.forEach(item => {
            this._renderer(item);
        });
    }
    addItem(element) {
        this._classSelector.append(element);
    }
}

export default Section;

