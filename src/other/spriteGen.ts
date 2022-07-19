import Canvas from "canvas";
import fs from "fs";
import path from "path";

export type ItemData = [korName: string, x: number, y: number];

const imageFileFolderPath = path.join("assets", "itemImages");
const dataSavePath = path.join("bin", "data.json");
const spriteSavePath = path.join("bin", "sprite.png");

const imageFileNames = fs.readdirSync(imageFileFolderPath).filter(name => name.endsWith(".png"));
const [spriteWidth, spriteHeight] = [16, 16];
const size = Math.ceil(Math.sqrt(imageFileNames.length));
const canvas = Canvas.createCanvas(spriteWidth*size, spriteHeight*size);
const ctx = canvas.getContext("2d");
async function generateSprite() {
  const data: { [itemName: string]: ItemData } = {};
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = y*size + x;
      const imageFileName = imageFileNames[idx];
      if (typeof imageFileName === "undefined") continue;
      const itemName = imageFileName.replace(/\.png$/, "");
      data[itemName] = [itemName, x, y];
      const imageFilePath = path.join(imageFileFolderPath, imageFileName);
      const image = await Canvas.loadImage(fs.readFileSync(imageFilePath));
      const xOffset = Math.max(0, spriteWidth - image.width);
      const yOffset = Math.max(0, spriteHeight - image.height);
      ctx.drawImage(
        image,
        0, 0, Math.min(spriteWidth, image.width), Math.min(spriteHeight, image.height),
        x*spriteWidth+xOffset, y*spriteHeight+yOffset, spriteWidth, spriteHeight
      );
    }
  }
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(spriteSavePath, buffer);
  const dataStr = JSON.stringify(data);
  fs.writeFileSync(dataSavePath, dataStr);
}
generateSprite();
