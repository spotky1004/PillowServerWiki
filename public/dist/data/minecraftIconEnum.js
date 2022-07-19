const itemDatas = {
    none: ["논", -1, -1]
};
Object.freeze(itemDatas);
for (const item in itemDatas) {
    Object.freeze(item);
}
export default itemDatas;
