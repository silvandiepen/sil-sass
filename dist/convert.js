"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixSassTypes = exports.toSassType = exports.toSassVariables = exports.toSassObject = exports.toSassValue = void 0;
const helpers_1 = require("./helpers");
const is_1 = require("./is");
const toSassValue = (input, key = "") => {
    const vars = {};
    let convertedInput = "";
    if (typeof input == "boolean") {
        convertedInput = input ? "true" : "false";
    }
    else if (typeof input == "string" &&
        ((0, is_1.isCssValue)(input) || (0, is_1.isCssCombi)(input) || input.startsWith("'"))) {
        convertedInput = `${input}`;
    }
    else if (typeof input == "string" &&
        input.startsWith("{") &&
        input.endsWith("}")) {
        vars[key] = "[" + input.replace("{", "").replace("}", "") + "]";
        if (key) {
            convertedInput = `$${key}`;
        }
        else {
            convertedInput = input.replace("{", "").replace("}", "");
        }
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
    return {
        result: convertedInput,
        variables: vars,
        variablesString: (0, exports.toSassVariables)(vars).variablesString,
    };
};
exports.toSassValue = toSassValue;
const toSassObject = (input) => {
    const sassObjectGroup = [];
    const vars = {};
    Object.keys(input).forEach((entry) => {
        const value = (0, exports.toSassValue)(input[entry], entry);
        Object.keys(value.variables).forEach((key) => {
            vars[key] = value.variables[key];
        });
        sassObjectGroup.push(`"${entry}": ${value.result}`);
    });
    const sassVariables = (0, exports.toSassVariables)(vars);
    return {
        result: sassObjectGroup.join(",\n"),
        variables: sassVariables.variables,
        variablesString: sassVariables.variablesString,
    };
};
exports.toSassObject = toSassObject;
const toSassVariables = (input) => {
    const sassVariableGroup = [];
    const fixedInput = {};
    Object.keys(input).forEach((entry) => {
        const value = (0, exports.toSassValue)(input[entry], entry).result;
        if (value.startsWith('"[') && value.endsWith(']"')) {
            const fixedValue = value.substring(2, value.length - 2);
            fixedInput[entry] = fixedValue;
            sassVariableGroup.push(`$${entry}: ${value.substring(2, value.length - 2)};`);
        }
        else {
            fixedInput[entry] = value;
            sassVariableGroup.push(`$${entry}: ${value};`);
        }
    });
    return {
        result: sassVariableGroup.join("\n"),
        variables: fixedInput,
        variablesString: sassVariableGroup.join("\n"),
    };
};
exports.toSassVariables = toSassVariables;
const toSassType = (input) => {
    if (typeof input == "boolean") {
        return input;
    }
    else if (typeof input == "string" &&
        ((0, is_1.isCssValue)(input) || (0, is_1.isCssCombi)(input) || input.startsWith("'"))) {
        return input;
    }
    else if (typeof input == "string") {
        return input;
    }
    else if (typeof input == "number") {
        return input;
    }
    else if (Array.isArray(input)) {
        return input;
    }
    else {
        return `${input}`;
    }
};
exports.toSassType = toSassType;
const fixSassTypes = (input) => {
    const sassObject = {};
    Object.keys(input).forEach((key) => {
        const value = (0, helpers_1.getKey)(input, key);
        sassObject[key] = (0, exports.toSassType)(value);
    });
    return sassObject;
};
exports.fixSassTypes = fixSassTypes;
//# sourceMappingURL=convert.js.map