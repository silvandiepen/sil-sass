"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SassObject = exports.SassValue = void 0;
var is_1 = require("./is");
var SassValue = function (input) {
    var convertedInput = "";
    if ((0, is_1.isCssNumber)(input) ||
        (typeof input == "string" && (0, is_1.isCssColor)(input)) ||
        (typeof input == "string" && (0, is_1.isCssFunction)(input)) ||
        (typeof input == "string" && (0, is_1.isCssPropertyValue)(input)) ||
        (typeof input == "string" && (0, is_1.isCssBoolean)(input)) ||
        (typeof input == "string" && input.startsWith("'"))) {
        convertedInput = input;
    }
    else if (typeof input == "string") {
        convertedInput = "\"".concat(input, "\"");
    }
    else if (Array.isArray(input)) {
        convertedInput = "(".concat(input.join(", "), ")");
    }
    else {
        var entries_1 = [];
        Object.keys(input).forEach(function (entry) {
            entries_1.push("".concat(entry, " : ").concat(input[entry]));
        });
        convertedInput = "(".concat(entries_1.join(", "), ")");
    }
    return convertedInput;
};
exports.SassValue = SassValue;
var SassObject = function (input) {
    var SassObjectGroup = [];
    Object.keys(input).forEach(function (entry) {
        SassObjectGroup.push("\"".concat(entry, "\": ").concat((0, exports.SassValue)(input[entry])));
    });
    return SassObjectGroup.join(",\n");
};
exports.SassObject = SassObject;
