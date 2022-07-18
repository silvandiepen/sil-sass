import {
  
  isCssValue,
  isCssCombi
} from "./is";

import { SassInput, SassInputTypes } from "./types";

export const toSassValue = (input: SassInputTypes): string => {
  let convertedInput = "";
  if (typeof input == "boolean") {
    convertedInput = input ? "true" : "false";
  } else if (
    typeof input == "string" &&
    (isCssValue(input) ||isCssCombi(input) ||
      input.startsWith("'"))
  ) {
    convertedInput = `${input}`;
  } else if (typeof input == "string") {
    convertedInput = `"${input}"`;
  } else if (typeof input == "number") {
    convertedInput = `${input}`;
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

export const toSassObject = (input: SassInput): string => {
  const sassObjectGroup: string[] = [];

  Object.keys(input).forEach((entry: string) => {
    sassObjectGroup.push(`"${entry}": ${toSassValue(input[entry])}`);
  });

  return sassObjectGroup.join(",\n");
};

export const toSassVariables = (input: SassInput): string => {
  const sassVariableGroup: string[] = [];

  Object.keys(input).forEach((entry: string) => {
    sassVariableGroup.push(`$${entry}: ${toSassValue(input[entry])};`);
  });

  return sassVariableGroup.join("\n");
};
