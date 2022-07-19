import Item, { ItemOptions } from "./Item.js";

type PerkFlags = "weaken" | "rare" | "red";

interface PerkOptions extends ItemOptions {
  description: string;
  perkFlags?: PerkFlags[];
  useCount?: number;
}

export default class Perk extends Item {
  readonly description: string;
  private readonly perkFlags: PerkFlags[];
  readonly useCount: number;

  constructor(options: PerkOptions) {
    super(options);
    this.description = options.description;
    this.perkFlags = [...(options.perkFlags || [])];
    this.useCount = options.useCount ?? -1;
  }

  getListName() {
    let itemNameStr = this.name;
    if (this.hasFlag()) {
      itemNameStr = ": " + itemNameStr;
      if (this.hasFlag("rare")) itemNameStr = "[color:#54fcfc]레어 [/color]" + itemNameStr;
      if (this.hasFlag("red")) itemNameStr = "[color:#926056]레드 [/color]" + itemNameStr;
      if (this.hasFlag("weaken")) itemNameStr = "[color:#54fcfc]약화 [/color]" + itemNameStr;
    }
    return itemNameStr;
  }

  hasFlag(name?: PerkFlags) {
    if (typeof name === "undefined") {
      return this.perkFlags.length >= 1;
    } else {
      return this.perkFlags.includes(name);
    }
  }
}
