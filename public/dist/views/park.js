import ItemList from "../class/ItemList.js";
import SpriteElement from "../class/SpriteElement.js";
import itemDatas from "../data/itemDatas.js";
import tmpPerks from "../data/tmpPerks.js";
import parseMarkup from "../util/parseMarkup.js";
const itemList = new ItemList({
    wrapper: document.getElementById("content"),
    type: "perk",
    displayTemplate(_, item) {
        itemImageSprite.update(...item.iconPos);
        const itemName = document.getElementById("item__name");
        itemName.replaceChildren(parseMarkup(item.getListName()));
        const itemDescription = document.getElementById("item__description");
        itemDescription.replaceChildren(parseMarkup(item.description));
        const itemExtraMessage = document.getElementById("item__extra-message");
        itemExtraMessage.replaceChildren(parseMarkup(item.extraMessage !== "" ?
            item.extraMessage :
            "[color:#fff2]No extra message.\nAdd any message about item here.[/color]"));
        const itemFrom = document.getElementById("item__from");
        console.log(item.fromRaidNr, item.fromRaidNr.length >= 1);
        itemFrom.replaceChildren(parseMarkup(item.fromRaidNr.length >= 1 ?
            `Section ${item.fromRaidNr.join(", ")}` :
            "[color:#fff2]Nowhere...[/color]"));
    }
});
const itemImageEl = document.getElementById("item__image");
const itemImageSprite = new SpriteElement({
    src: window.location.origin + "/asset/images/itemSprite.png",
    el: itemImageEl,
    leftOffset: 0,
    topOffset: 0,
    spriteWidth: 16,
    spriteHeight: 16,
    imageWidth: 592,
    imageHeight: 592
});
itemImageSprite.update(itemDatas.barrier[1], itemDatas.barrier[2]);
for (const perk of tmpPerks) {
    itemList.addItem(perk);
}
// itemList.addItem(new Perk({
//   name: "[color:#a8dbf0]Pilo[/color]",
//   description: "[color:#f0f050]50[/color]초 충전 후 발동합니다.\n모든 플레이어가 [color:#fc5454]1[/color]의 피해를 받습니다.",
//   extraMessage: "",
//   itemData: itemDatas.white_wool,
//   fromRaidNr: [45]
// }));
// for (let i = 0; i < 99; i++) {
//   itemList.addItem(new Perk({
//     name: "[color:#0f0]Tree[/color]",
//     description: "[color:#0f0]나무[/color] 위에서 스폰합니다.",
//     extraMessage: "",
//     itemData: itemDatas.spruce_sapling,
//     fromRaidNr: []
//   }));
// }
