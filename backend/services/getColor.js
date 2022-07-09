const ColorTable = {
    BLACK: "#000000",
    GRAY: "#999999",
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
    const target_color_vector = colorToVector(targetColor);
    let color = null;
    let min_distance = getDistanceOfVector([0, 0, 0], [255, 255, 255]);
    Object.keys(ColorTable).forEach(key => {
        const distance = getDistanceOfVector(colorToVector(ColorTable[key]), target_color_vector);
        if (distance < min_distance) {
            min_distance = distance;
            color = ColorTable[key];
        }
    });
    return color;
};

const colorToVector = (color) => {
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

const hex2dec = (hex_string) => {
    your_number = parseInt(hex_string, 16);
    return your_number;
};

const isHexColor = (color) => {
    return /#[\da-f]{6}/i.test(color);
};

module.exports = { getColor };
