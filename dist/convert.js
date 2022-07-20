"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSassVariables = exports.toSassObject = exports.toSassValue = void 0;
const is_1 = require("./is");
const toSassValue = (input) => {
    let convertedInput = "";
    if (typeof input == "boolean") {
        convertedInput = input ? "true" : "false";
    }
    else if (typeof input == "string" &&
        ((0, is_1.isCssValue)(input) || (0, is_1.isCssCombi)(input) ||
            input.startsWith("'"))) {
        convertedInput = `${input}`;
    }
    else if (typeof input == "string") {
        convertedInput = `"${input}"`;
    }
    else if (typeof input == "number") {
        convertedInput = `${input}`;
    }
    else if (Array.isArray(input)) {
        convertedInput = `(${input.join(", ")})`;
    }
    else {
        let entries = [];
        Object.keys(input).forEach((entry) => {
            entries.push(`${entry} : ${input[entry]}`);
        });
        convertedInput = `(${entries.join(", ")})`;
    }
    return convertedInput;
};
exports.toSassValue = toSassValue;
const toSassObject = (input) => {
    const sassObjectGroup = [];
    Object.keys(input).forEach((entry) => {
        sassObjectGroup.push(`"${entry}": ${(0, exports.toSassValue)(input[entry])}`);
    });
    return sassObjectGroup.join(",\n");
};
exports.toSassObject = toSassObject;
const toSassVariables = (input) => {
    const sassVariableGroup = [];
    Object.keys(input).forEach((entry) => {
        sassVariableGroup.push(`$${entry}: ${(0, exports.toSassValue)(input[entry])};`);
    });
    return sassVariableGroup.join("\n");
};
exports.toSassVariables = toSassVariables;
//# sourceMappingURL=convert.js.map