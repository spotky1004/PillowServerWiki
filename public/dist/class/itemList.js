import parseMarkup from "../util/parseMarkup.js";
import SpriteElement from "./SpriteElement.js";
export default class ItemList {
    constructor(options) {
        this.displayTemplate = options.displayTemplate;
        this.items = [];
        const wrapper = options.wrapper;
        const listNav = document.createElement("div");
        listNav.id = "item-list__nav";
        wrapper.appendChild(listNav);
        const itemDisplayTemplate = document.getElementById("item-display-template");
        const itemDisplay = itemDisplayTemplate.cloneNode(true);
        document.body.removeChild(itemDisplayTemplate);
        itemDisplay.id = "";
        itemDisplay.style.display = "";
        itemDisplay.classList.add("item-list__item-display");
        wrapper.appendChild(itemDisplay);
        this.els = {
            wrapper,
            listNav,
            listItems: [],
            itemDisplay
        };
    }
    addItem(item) {
        this.items.push(item);
        const listItem = document.createElement("div");
        listItem.classList.add("item-list__nav__item");
        listItem.addEventListener("click", () => {
            this.openItem(item);
        });
        this.els.listNav.appendChild(listItem);
        const listItemItemImage = document.createElement("span");
        listItemItemImage.classList.add("item-list__nav__item__image");
        listItem.appendChild(listItemItemImage);
        const listItemItemName = document.createElement("span");
        listItemItemName.classList.add("item-list__nav__item__name");
        listItemItemName.replaceChildren(parseMarkup(item.getListName()));
        listItem.appendChild(listItemItemName);
        new SpriteElement({
            src: window.location.origin + "/asset/images/itemSprite.png",
            el: listItemItemImage,
            leftOffset: 0,
            topOffset: 0,
            spriteWidth: 16,
            spriteHeight: 16,
            imageWidth: 592,
            imageHeight: 592
        }).update(...item.iconPos);
        this.els.listItems.push(listItem);
        return this;
    }
    openItem(item) {
        const idx = this.items.findIndex(i => i.name === item.name);
        if (idx === -1)
            return;
        void this.displayTemplate(this.els.itemDisplay, item);
    }
}
