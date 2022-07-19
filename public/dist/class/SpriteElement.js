export default class SpriteElement {
    constructor(options) {
        this.src = options.src;
        this.el = options.el;
        this.leftOffset = options.leftOffset;
        this.topOffset = options.topOffset;
        this.spriteWidth = options.spriteWidth;
        this.spriteHeight = options.spriteHeight;
        this.imageWidth = options.imageWidth;
        this.imageHeight = options.imageHeight;
        this.el.style.backgroundImage = `url(${this.src})`;
        this.el.style.backgroundSize = `${this.imageWidth / this.spriteWidth * 100}% ${this.imageHeight / this.spriteHeight * 100}%`;
        this.update(-1, -1);
    }
    update(x, y) {
        this.el.style.backgroundPosition = `${-x * 100}% ${-y * 100}%`;
    }
}
