"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = require("./convert");
const sassValues = [
    { input: "rgba()", output: '"rgba()"' },
    { input: "rgba(0,0,0,0)", output: "rgba(0,0,0,0)" },
    { input: "#ffffff", output: "#ffffff" },
    { input: "true", output: "true" },
    { input: true, output: "true" },
    { input: "false", output: "false" },
    { input: false, output: "false" },
    { input: "ugh", output: '"ugh"' },
];
describe("SassValue", () => {
    Object.keys(sassValues).forEach((_v, key) => {
        it("should convert to a Sass value", () => {
            expect((0, convert_1.toSassValue)(sassValues[key].input)).toBe(sassValues[key].output);
        });
    });
});
describe("SassObject", () => {
    it("Should convert to a Sass Object", () => {
        const input = {
            SomethingGoingOn: true,
            myValue: [1, 3, 5, "string"],
            left: "left",
            right: "center",
            position: "absolute",
            content: "something"
        };
        const output = `"SomethingGoingOn": true,
"myValue": (1, 3, 5, string),
"left": left,
"right": center,
"position": absolute,
"content": "something"`;
        expect((0, convert_1.toSassObject)(input)).toBe(output);
    });
});
describe("SassVariables", () => {
    it("Should convert to a Sass Variables", () => {
        const input = {
            SomethingGoingOn: true,
            myValue: [1, 3, 5, "string"],
            left: "left",
            right: "center",
            position: "absolute",
            content: "something"
        };
        const output = `$SomethingGoingOn: true;
$myValue: (1, 3, 5, string);
$left: left;
$right: center;
$position: absolute;
$content: "something";`;
        expect((0, convert_1.toSassVariables)(input)).toBe(output);
    });
});
