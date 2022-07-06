const ColorTable = {
    BLACK: "#000000",
    WHITE: "#ffffff",
    ORANGE: "#e69f00",
    BLUE: "#0072b1",
    SKYBLUE: "#56b4e8",
    GREEN: "#009f73",
    YELLOW: "#f0e542",
    VERMILION: "#d55f00",
    PURPLE: "#cd78a8"
};

const getColor = (targetColor) => {
    const targetColorVector = colorToVector(targetColor);
    let color = null;
    let minDistance = getDistanceOfVector([0, 0, 0], [255, 255, 255]);
    Object.keys(ColorTable).forEach(key => {
        const distance = getDistanceOfVector(colorToVector(ColorTable[key]), targetColorVector);
        if (distance < minDistance) color = ColorTable[key];
    });
    return color;
};

const colorToVector = (color) => {
    // TODO: hex 형태가 아닌 color의 처리는 어떻게?
    if (!isHexColor) return;
    const vector = [
        hex2dec(color.slice(1, 3)),
        hex2dec(color.slice(3, 5)),
        hex2dec(color.slice(5, 7)),
    ];
    return vector;
};

const getDistanceOfVector = (v1, v2) => {
    distance = 0;
    for (let i=0; i<v1.length; i++)
        distance += (v1[i] - v2[i]) * (v1[i] - v2[i]);
    return distance;
};

const hex2dec = (hexString) => {
    yourNumber = parseInt(hexString, 16);
    return yourNumber;
};

const isHexColor = (color) => {
    return /#[\da-f]{6}/i.test(color);
};

module.exports = { getColor };