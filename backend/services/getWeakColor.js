var convert = require('color-convert');

const ColorTable = {
    BLACK: [0, 0, 0],
    GRAY: [128, 128, 128],
    WHITE: [255, 255, 255],
    ORANGE: [230, 159, 0], // #e69f00
    BLUE: [0, 114, 177], // #0072b1
    SKYBLUE: [86, 180, 232], // #56b4e8
    GREEN: [0, 159, 115], // #009f73
    YELLOW: [240, 229, 66], // #f0e542
    VERMILION: [213, 95, 0], // #d55f00
    PURPLE: [213, 95, 0] // #cd78a8
};

const getColor = (targetColor) => {
    const target_color_vector = convert.hex.rgb(targetColor.substr(1));
    const target_lightness = convert.hex.hsl(targetColor.substr(1))[2];
    let min_distance = getDistanceOfVector(ColorTable.BLACK, ColorTable.WHITE);
    let color = null;
    let distance = null;
    Object.keys(ColorTable).forEach(key => {
        distance = getDistanceOfVector(ColorTable[key], target_color_vector);
        if (distance < min_distance) {
            min_distance = distance;
            color = ColorTable[key];
        }
    });
    let hsl = convert.rgb.hsl(color);
    hsl[2] = target_lightness;
    color = '#'+convert.hsl.hex(hsl);
    return color;
};

const getDistanceOfVector = (v1, v2) => {
    let distance = 0;
    for (let i = 0; i < v1.length; i++)
        distance += (v1[i] - v2[i]) * (v1[i] - v2[i]);
    return distance;
};

module.exports = { getColor };
