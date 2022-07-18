import { propertyValues, functions, units } from "./data/";
import { isHex, isHSL, isHSLA, isRGB, isRGBA } from "@sil/color";

export const isCssFunction = (str: string): boolean =>
  functions.some((v) => str.includes(`${v}(`) && str.endsWith(")"));

export const isCssPropertyValue = (str: string): boolean =>
  propertyValues.includes(str as any);

export const isCssNumber = (str: string | number): boolean => {
  if (typeof str == "number") return true;

  let isNumber = false;

  const floatStr = parseFloat(str);

  if (units.some((u) => `${floatStr}${u}` == str)) isNumber = true;

  if (str == "0") isNumber = true;
  if (
    (parseFloat(str) > 0 && `${parseFloat(str)}` == str) ||
    (str.startsWith("0.") && `${parseFloat(str)}` == str)
  )
    isNumber = true;

  return isNumber;
};

export const isCssColor = (str: string | number): boolean => {
  if (typeof str == "number") return false;
  return isHex(str) || isRGB(str) || isRGBA(str) || isHSL(str) || isHSLA(str);
};

export const isCssBoolean = (str: string): boolean =>
  str == "true" || str == "false";

export const isCssValue = (str: string, log = false): boolean => {
  let result = false;

  if (isCssNumber(str)) result = true;
  if (isCssColor(str)) result = true;
  if (isCssFunction(str)) result = true;
  if (isCssPropertyValue(str)) result = true;
  if (isCssBoolean(str)) result = true;
  return result;
};

export const isCssCombi = (str: string | number): boolean => {
  if (typeof str == "number") return true;
  const brokenStr = str
    .replace(/\ *\([^)]*\)/g, (x) => x.replaceAll(" ", ""))
    .split(" ");

  let conclusion = false;

  brokenStr.forEach((s) => {
    conclusion = isCssValue(s, true);
  });

  return conclusion;
};
