"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("./is");
const valueOptions = [
    {
        input: "lowercase",
        output: true,
    },
    {
        input: "uppercase",
        output: true,
    },
    {
        input: "UPPERCASE",
        output: false,
    },
    {
        input: "capitalize",
        output: true,
    },
    {
        input: "something",
        output: false,
    },
    {
        input: "else",
        output: false,
    },
];
describe("CSS Value", () => {
    Object.keys(valueOptions).forEach((_v, key) => {
        const value = valueOptions[key];
        it(`Should check if it's a property value - ${value.input} -> ${value.output}`, () => {
            expect((0, is_1.isCssPropertyValue)(value.input)).toBe(value.output);
        });
    });
});
const functionOptions = [
    {
        input: "calc(1*2)",
        output: true,
    },
    {
        input: "calc(1*2",
        output: false,
    },
    {
        input: "some(1*2)",
        output: false,
    },
    {
        input: "var(134324324324*2)",
        output: true,
    },
];
describe("CSS Function", () => {
    Object.keys(functionOptions).forEach((_v, key) => {
        const value = functionOptions[key];
        it(`Should check if it's a function - ${value.input} -> ${value.output}`, () => {
            expect((0, is_1.isCssFunction)(value.input)).toBe(value.output);
        });
    });
});
const colorOptions = [
    { input: "#ff0000", output: true },
    { input: "#ff00000", output: false },
    { input: "red(232)", output: false },
    { input: "rgb(2,5,5)", output: true },
    { input: "rgb(2,5,5,0)", output: false },
    { input: "rgba(2,5,5,0)", output: true },
    { input: "rgb(2,5,5,0,2)", output: false },
    { input: "rgb(5,5)", output: false },
];
describe("CSS Color", () => {
    Object.keys(colorOptions).forEach((_v, key) => {
        const value = colorOptions[key];
        it(`Should check if it's a color - ${value.input} -> ${value.output}`, () => {
            expect((0, is_1.isCssColor)(value.input)).toBe(value.output);
        });
    });
});
const booleanOptions = [
    { input: "true", output: true },
    { input: "false", output: true },
    { input: "TRUE", output: false },
    { input: "fals", output: false },
];
describe("CSS Boolean", () => {
    Object.keys(booleanOptions).forEach((_v, key) => {
        const value = booleanOptions[key];
        it(`Should check if it's a boolean - ${value.input} -> ${value.output}`, () => {
            expect((0, is_1.isCssBoolean)(value.input)).toBe(value.output);
        });
    });
});
const numberOptions = [
    { input: "0", output: true },
    { input: "1", output: true },
    { input: "0.5", output: true },
    { input: "10px", output: true },
    { input: "0px", output: true },
    { input: "20000s", output: true },
    { input: "0]", output: false },
    { input: "0.1]", output: false },
    { input: "20seconds", output: false },
];
describe("CSS Numbers", () => {
    Object.keys(numberOptions).forEach((_v, key) => {
        const value = numberOptions[key];
        it(`Should check if it's a boolean - ${value.input} -> ${value.output}`, () => {
            expect((0, is_1.isCssNumber)(value.input)).toBe(value.output);
        });
    });
});
const combiOptions = [
    { input: "0 3px 4px 0 rgba(0, 0, 0, 0.1)", output: true },
    { input: "0px 3px 4px 0 rgba(0, 0, 0, 0.1)", output: true },
    { input: "0px 3px 4px 0 rgba[0, 0, 0, 0.1]", output: false },
    { input: "something", output: false },
];
describe("CSS Combi", () => {
    Object.keys(combiOptions).forEach((_v, key) => {
        const value = combiOptions[key];
        it(`Should check if it's a misc - ${value.input} -> ${value.output}`, () => {
            expect((0, is_1.isCssCombi)(value.input)).toBe(value.output);
        });
    });
});
//# sourceMappingURL=is.test.js.map