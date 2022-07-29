"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCssCombi = exports.isCssValue = exports.isCssBoolean = exports.isCssColor = exports.isCssNumber = exports.isCssPropertyValue = exports.isCssFunction = void 0;
const data_1 = require("./data/");
const color_1 = require("@sil/color");
const isCssFunction = (str) => data_1.functions.some((v) => str.includes(`${v}(`) && str.endsWith(")"));
exports.isCssFunction = isCssFunction;
const isCssPropertyValue = (str) => data_1.propertyValues.includes(str);
exports.isCssPropertyValue = isCssPropertyValue;
const isCssNumber = (str) => {
    if (typeof str == "number")
        return true;
    let isNumber = false;
    const floatStr = parseFloat(str);
    if (data_1.units.some((u) => `${floatStr}${u}` == str))
        isNumber = true;
    if (str == "0")
        isNumber = true;
    if ((parseFloat(str) > 0 && `${parseFloat(str)}` == str) ||
        (str.startsWith("0.") && `${parseFloat(str)}` == str))
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
const isCssValue = (str) => {
    let result = false;
    if ((0, exports.isCssNumber)(str))
        result = true;
    if ((0, exports.isCssColor)(str))
        result = true;
    if ((0, exports.isCssFunction)(str))
        result = true;
    if ((0, exports.isCssPropertyValue)(str))
        result = true;
    if ((0, exports.isCssBoolean)(str))
        result = true;
    return result;
};
exports.isCssValue = isCssValue;
const isCssCombi = (str) => {
    if (typeof str == "number")
        return true;
    const brokenStr = str
        .replace(/\ *\([^)]*\)/g, (x) => x.replaceAll(" ", ""))
        .split(" ");
    let conclusion = false;
    brokenStr.forEach((s) => {
        conclusion = (0, exports.isCssValue)(s);
    });
    return conclusion;
};
exports.isCssCombi = isCssCombi;
//# sourceMappingURL=is.js.map