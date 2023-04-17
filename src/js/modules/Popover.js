export default class Popover {
    constructor() {
        this._popover = [];
    }

    showPopover(message, element) {
        const popoverElement = document.createElement('div');
        popoverElement.classList.add('popover');
    }
}