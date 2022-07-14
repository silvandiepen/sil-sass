import {
  isCssNumber,
  isCssColor,
  isCssFunction,
  isCssPropertyValue,
  isCssBoolean,
} from "./is";

export const SassValue = (input: any) => {
  let convertedInput = "";
  if (
    isCssNumber(input) ||
    (typeof input == "string" && isCssColor(input)) ||
    (typeof input == "string" && isCssFunction(input)) ||
    (typeof input == "string" && isCssPropertyValue(input)) ||
    (typeof input == "string" && isCssBoolean(input)) ||
    (typeof input == "string" && input.startsWith("'"))
  ) {
    convertedInput = input;
  } else if (typeof input == "string") {
    convertedInput = `"${input}"`;
  } else if (Array.isArray(input)) {
    convertedInput = `(${input.join(", ")})`;
  } else {
    let entries: string[] = [];
    Object.keys(input).forEach((entry) => {
      entries.push(`${entry} : ${input[entry]}`);
    });
    convertedInput = `(${entries.join(", ")})`;
  }
  return convertedInput;
};

export const SassObject = (input: any): string => {
  let SassObjectGroup: string[] = [];

  Object.keys(input).forEach((entry: string) => {
    SassObjectGroup.push(`"${entry}": ${SassValue(input[entry])}`);
  });

  return SassObjectGroup.join(",\n");
};
