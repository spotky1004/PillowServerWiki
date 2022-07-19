import type { ItemData } from "../data/itemDatas.js";

export interface ItemOptions {
  name: string;
  itemData: ItemData;
  fromRaidNr: number[];
  extraMessage?: string;
}

export default class Item {
  readonly name: string;
  readonly originalItemName: string;
  readonly iconPos: [x: number, y: number];
  readonly fromRaidNr: number[];
  readonly extraMessage: string;

  constructor(options: ItemOptions) {
    this.name = options.name;
    this.originalItemName = options.itemData[0];
    this.iconPos = [options.itemData[1], options.itemData[2]];
    this.fromRaidNr = [...options.fromRaidNr];
    this.extraMessage = options.extraMessage ?? "";
  }

  getListName() {
    return this.name;
  }
}
