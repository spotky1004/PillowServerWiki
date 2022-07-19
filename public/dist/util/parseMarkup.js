import matchOne from "./matchOne.js";
const regexps = {
    color: /^\[color:(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8}))\]/,
    colorEnd: /^\[\/color]/
};
export default function parseMarkup(text) {
    function addTextChunk() {
        if (textChunk === "")
            return;
        const textNode = document.createTextNode(textChunk);
        textChunk = "";
        elStack[elStack.length - 1].appendChild(textNode);
    }
    const topEl = document.createElement("div");
    let elStack = [topEl];
    let textChunk = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const sliced = text.slice(i);
        if (regexps.color.test(sliced)) {
            const match = matchOne(sliced, regexps.color);
            const color = matchOne(sliced, regexps.color, 1);
            if (!match || !color)
                throw new Error("Unknown markup parse error. (001)");
            addTextChunk();
            const el = document.createElement("span");
            el.style.color = color;
            elStack[elStack.length - 1].appendChild(el);
            elStack.push(el);
            i += match.length - 1;
            continue;
        }
        else if (regexps.colorEnd.test(sliced)) {
            const match = matchOne(sliced, regexps.colorEnd);
            if (!match)
                throw new Error("Unknown markup parse error. (002)");
            addTextChunk();
            elStack.pop();
            i += match.length - 1;
            continue;
        }
        if (char === "\n") {
            addTextChunk();
            elStack[elStack.length - 1].appendChild(document.createElement("br"));
        }
        else {
            textChunk += char;
        }
    }
    addTextChunk();
    return topEl;
}
