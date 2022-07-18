"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCssBoolean = exports.isCssColor = exports.isCssNumber = exports.isCssPropertyValue = exports.isCssFunction = void 0;
const data_1 = require("./data/");
const color_1 = require("@sil/color");
const isCssFunction = (str) => data_1.functions.some((v) => str.includes(`${v}(`) && str.endsWith(")"));
exports.isCssFunction = isCssFunction;
const isCssPropertyValue = (str) => data_1.propertyValues.includes(str);
exports.isCssPropertyValue = isCssPropertyValue;
const isCssNumber = (str) => {
    let isNumber = false;
    if (str == "0")
        isNumber = true;
    if (typeof str == "number")
        isNumber = true;
    if (typeof str == "string")
        if (parseInt(str) > 0 || str.startsWith("0."))
            isNumber = true;
    return isNumber;
};
exports.isCssNumber = isCssNumber;
const isCssColor = (str) => {
    if (typeof str == "number")
        return false;
    return (0, color_1.isHex)(str) || (0, color_1.isRGB)(str) || (0, color_1.isRGBA)(str) || (0, color_1.isHSL)(str) || (0, color_1.isHSLA)(str);
};
exports.isCssColor = isCssColor;
const isCssBoolean = (str) => str == "true" || str == "false";
exports.isCssBoolean = isCssBoolean;
