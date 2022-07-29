import { getKey } from "./helpers";
import { isCssValue, isCssCombi } from "./is";

import { SassInput, SassInputTypes, SassVariables, SassOutput } from "./types";


export const toSassValue = (
  input: SassInputTypes,
  key: string = ""
): SassOutput => {
  const vars: SassVariables = {};
  let convertedInput = "";

  if (typeof input == "boolean") {
    convertedInput = input ? "true" : "false";
  } else if (
    typeof input == "string" &&
    (isCssValue(input) || isCssCombi(input) || input.startsWith("'"))
  ) {
    convertedInput = `${input}`;
  } else if (
    typeof input == "string" &&
    input.startsWith("{") &&
    input.endsWith("}")
  ) {
    // vars[key] = ;
    vars[key] = "[" + input.replace("{", "").replace("}", "") + "]";
    if (key) {
      convertedInput = `$${key}`;
    } else {
      convertedInput = input.replace("{", "").replace("}", "");
    }
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

  return {
    result: convertedInput,
    variables: vars,
    variablesString: toSassVariables(vars).variablesString,
  };
};

export const toSassObject = (input: SassInput): SassOutput => {
  const sassObjectGroup: string[] = [];

  const vars: SassVariables = {};

  Object.keys(input).forEach((entry: string) => {
    const value = toSassValue(input[entry], entry);

    Object.keys(value.variables).forEach((key) => {
      vars[key] = value.variables[key];
    });

    sassObjectGroup.push(`"${entry}": ${value.result}`);
  });

  const sassVariables = toSassVariables(vars);

  return {
    result: sassObjectGroup.join(",\n"),
    variables: sassVariables.variables,
    variablesString: sassVariables.variablesString,
  };
};

export const toSassVariables = (input: SassInput): SassOutput => {
  const sassVariableGroup: string[] = [];

  const fixedInput: SassVariables = {};

  Object.keys(input).forEach((entry: string) => {
    const value = toSassValue(input[entry], entry).result;

    if (value.startsWith('"[') && value.endsWith(']"')) {
      const fixedValue = value.substring(2, value.length - 2);
      fixedInput[entry] = fixedValue;
      sassVariableGroup.push(
        `$${entry}: ${value.substring(2, value.length - 2)};`
      );
    } else {
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
