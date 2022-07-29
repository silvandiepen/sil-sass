import { getKey } from "./helpers";
import { isCssValue, isCssCombi } from "./is";

import { SassInput, SassInputTypes } from "./types";

export const toSassValue = (input: SassInputTypes): string => {
  let convertedInput = "";
  if (typeof input == "boolean") {
    convertedInput = input ? "true" : "false";
  } else if (
    typeof input == "string" &&
    (isCssValue(input) || isCssCombi(input) || input.startsWith("'"))
  ) {
    convertedInput = `${input}`;
  } else if (
    typeof input == "string" && input.startsWith('[') && input.endsWith(']')
  ) {
    convertedInput = input.replace('[','').replace(']','');
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

export const toSassType = (input: any): SassInputTypes => {
  if (typeof input == "boolean") {
    return input as boolean;
  } else if (
    typeof input == "string" &&
    (isCssValue(input) || isCssCombi(input) || input.startsWith("'"))
  ) {
    return input as string;
  } else if (typeof input == "string") {
    return input as string;
  } else if (typeof input == "number") {
    return input as number;
  } else if (Array.isArray(input)) {
    return input as (string | number | boolean)[];
  } else {
    return `${input}` as string;
  }
};

export const fixSassTypes = (input: Object): SassInput => {
  const sassObject: SassInput = {};

  Object.keys(input).forEach((key: string) => {
    const value = getKey(input, key);
    sassObject[key] = toSassType(value);
  });

  return sassObject;
};
