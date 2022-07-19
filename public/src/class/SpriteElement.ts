interface SpriteOptions {
  src: string;
  el: HTMLElement;
  leftOffset: number;
  topOffset: number;
  spriteWidth: number;
  spriteHeight: number;
  imageWidth: number;
  imageHeight: number;
}

export default class SpriteElement {
  readonly src: string;
  readonly el: HTMLElement;
  readonly leftOffset: number;
  readonly topOffset: number;
  readonly spriteWidth: number;
  readonly spriteHeight: number;
  readonly imageWidth: number;
  readonly imageHeight: number;

  constructor(options: SpriteOptions) {
    this.src = options.src;
    this.el = options.el;
    this.leftOffset = options.leftOffset;
    this.topOffset = options.topOffset;
    this.spriteWidth = options.spriteWidth;
    this.spriteHeight = options.spriteHeight;
    this.imageWidth = options.imageWidth;
    this.imageHeight = options.imageHeight;

    this.el.style.backgroundImage = `url(${this.src})`;
    this.el.style.backgroundSize = `${this.imageWidth/this.spriteWidth*100}% ${this.imageHeight/this.spriteHeight*100}%`;
    this.update(-1, -1);
  }

  update(x: number, y: number) {
    this.el.style.backgroundPosition = `${-x*100}% ${-y*100}%`;
  }
}