"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = __importDefault(require("canvas"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const imageFileFolderPath = path_1.default.join("assets", "itemImages");
const dataSavePath = path_1.default.join("bin", "data.json");
const spriteSavePath = path_1.default.join("bin", "sprite.png");
const imageFileNames = fs_1.default.readdirSync(imageFileFolderPath).filter(name => name.endsWith(".png"));
const [spriteWidth, spriteHeight] = [16, 16];
const size = Math.ceil(Math.sqrt(imageFileNames.length));
const canvas = canvas_1.default.createCanvas(spriteWidth * size, spriteHeight * size);
const ctx = canvas.getContext("2d");
async function generateSprite() {
    const data = {};
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const idx = y * size + x;
            const imageFileName = imageFileNames[idx];
            if (typeof imageFileName === "undefined")
                continue;
            data[imageFileName.replace(/\.png$/, "")] = ["", x, y];
            const imageFilePath = path_1.default.join(imageFileFolderPath, imageFileName);
            const image = await canvas_1.default.loadImage(fs_1.default.readFileSync(imageFilePath));
            const xOffset = Math.max(0, spriteWidth - image.width);
            const yOffset = Math.max(0, spriteHeight - image.height);
            ctx.drawImage(image, 0, 0, Math.min(spriteWidth, image.width), Math.min(spriteHeight, image.height), x * spriteWidth + xOffset, y * spriteHeight + yOffset, spriteWidth, spriteHeight);
        }
    }
    const buffer = canvas.toBuffer("image/png");
    fs_1.default.writeFileSync(spriteSavePath, buffer);
    const dataStr = JSON.stringify(data, undefined, 2);
    fs_1.default.writeFileSync(dataSavePath, dataStr);
}
generateSprite();
