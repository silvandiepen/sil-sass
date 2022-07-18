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
const isCssValue = (str) => (0, exports.isCssNumber)(str) ||
    (0, exports.isCssColor)(str) ||
    (0, exports.isCssFunction)(str) ||
    (0, exports.isCssPropertyValue)(str) ||
    (0, exports.isCssBoolean)(str);
exports.isCssValue = isCssValue;
const isCssCombi = (str) => {
    if (typeof str == "number")
        return true;
    const brokenStr = str
        .replace(/\ *\([^)]*\)/g, (x) => x.replaceAll(" ", ""))
        .split(" ");
    console.table({
        value: brokenStr,
        number: brokenStr.some((s) => (0, exports.isCssNumber)(s)),
        color: brokenStr.some((s) => (0, exports.isCssColor)(s)),
        func: brokenStr.some((s) => (0, exports.isCssFunction)(s)),
        propvalue: brokenStr.some((s) => (0, exports.isCssPropertyValue)(s)),
        bool: brokenStr.some((s) => (0, exports.isCssBoolean)(s)),
    });
    const arr = [];
    // {
    //   str: "",
    //   number: true,
    //   color: true,
    //   func: true,
    //   prop: true,
    //   bool: true,
    // };
    brokenStr.forEach((s) => {
        arr.push({
            str: s,
            number: (0, exports.isCssNumber)(s),
            color: (0, exports.isCssColor)(s),
            func: (0, exports.isCssFunction)(s),
            prop: (0, exports.isCssPropertyValue)(s),
            bool: (0, exports.isCssBoolean)(s),
        });
    });
    return brokenStr.some((s) => (0, exports.isCssValue)(s));
};
exports.isCssCombi = isCssCombi;
