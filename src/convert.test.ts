import {
  toSassValue,
  toSassObject,
  toSassVariables,
  fixSassTypes,
} from "./convert";

const sassValues: { input: any; output: string }[] = [
  { input: "rgba()", output: '"rgba()"' },
  { input: "rgba(0,0,0,0)", output: "rgba(0,0,0,0)" },
  { input: "#ffffff", output: "#ffffff" },
  { input: "true", output: "true" },
  { input: true, output: "true" },
  { input: "false", output: "false" },
  { input: false, output: "false" },
  { input: "ugh", output: '"ugh"' },
  {
    input:
      '[-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]',
    output:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
];

describe("SassValue", () => {
  Object.keys(sassValues).forEach((_v, key) => {
    it("should convert to a Sass value", () => {
      expect(toSassValue(sassValues[key].input)).toBe(sassValues[key].output);
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
      content: "something",
    };

    const output = `"SomethingGoingOn": true,
"myValue": (1, 3, 5, string),
"left": left,
"right": center,
"position": absolute,
"content": "something"`;

    expect(toSassObject(input)).toBe(output);
  });

  it("Should convert to a correct line of font family", () => {
    const input = {
        primaryFontFamily:
          '[-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]',
        secondaryFontFamily: "times"
    };
    const output = `"primaryFontFamily": -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
"secondaryFontFamily": "times"`
    expect(toSassObject(input)).toBe(output);
  });
});

describe("SassObject", () => {
  it("Should convert to a Sass Object", () => {
    const input = {
      prefix: "my-project",
      styleOutput: true,
      classBasedProperties: true,
      generateBase: true,
      generateTypography: true,
      generateColors: true,
      generateColorModes: true,
      colorModes: true,
      colorShades: true,
      colorPercentages: false,
      colorSteps: [10, 25, 50, 75, 90],
      colorText: true,
      breakpointNames: ["small", "medium", "large"],
      breakpointSizes: [0, 720, 1200],
    };
    const output = `"prefix": "my-project",
"styleOutput": true,
"classBasedProperties": true,
"generateBase": true,
"generateTypography": true,
"generateColors": true,
"generateColorModes": true,
"colorModes": true,
"colorShades": true,
"colorPercentages": false,
"colorSteps": (10, 25, 50, 75, 90),
"colorText": true,
"breakpointNames": (small, medium, large),
"breakpointSizes": (0, 720, 1200)`;

    expect(toSassObject(input)).toBe(output);
  });
});

describe("fixSassTypes", () => {
  it("Should convert to an object with Sass Types", () => {
    const input = {
      prefix: "my-project",
      primaryFontFamily:
        '"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      styleOutput: true,
      classBasedProperties: true,
      generateBase: true,
      generateTypography: true,
      generateColors: true,
      generateColorModes: true,
      colorModes: true,
      colorShades: true,
      colorPercentages: false,
      colorSteps: [10, 25, 50, 75, 90],
      colorText: true,
      breakpointNames: ["small", "medium", "large"],
      breakpointSizes: [0, 720, 1200],
    };
    const output = input;

    expect(fixSassTypes(input)).toEqual(output);
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
      content: "something",
    };

    const output = `$SomethingGoingOn: true;
$myValue: (1, 3, 5, string);
$left: left;
$right: center;
$position: absolute;
$content: "something";`;

    expect(toSassVariables(input)).toBe(output);
  });
});
