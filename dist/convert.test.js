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
    {
        input: '[-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]',
        output: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
];
describe("SassValue", () => {
    Object.keys(sassValues).forEach((_v, key) => {
        it("should convert to a Sass value", () => {
            const result = (0, convert_1.toSassValue)(sassValues[key].input);
            expect(result.result).toBe(sassValues[key].output);
        });
    });
    it("should convert to a Sass value, width key", () => {
        const result = (0, convert_1.toSassValue)('[-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]', 'test');
        expect(result.result).toBe('$test');
    });
});
//# sourceMappingURL=convert.test.js.map