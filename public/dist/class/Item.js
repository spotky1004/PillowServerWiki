export default class Item {
    constructor(options) {
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
