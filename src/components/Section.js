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
        this._classSelector.prepend(element);
    }
}

export default Section;

//indx .js connect wirth card, render generates for each item with 
//card and then render to make it appear on the page