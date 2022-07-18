import { camelCase } from "@sil/case";
import { uppercased } from "../helpers";

export const cssProperties = [
  "position",
  "background",
  "background-image",
  "background-position",
  "background-size",
  "background-repeat",
  "background-attachment",
  "background-origin",
  "background-clip",
  "background-color",
  "border",
  "border-color",
  "border-style",
  "border-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-style",
  "border-bottom-width",
  "border-top",
  "border-top-color",
  "border-top-style",
  "border-top-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-collapse",
  "border-break",
  "border-radius",
  "border-top-right-radius",
  "border-top-left-radius",
  "border-bottom-right-radius",
  "border-bottom-left-radius",
  "box-shadow",
  "border-spacing",
  "caption-side",
  "empty-cells",
  "table-layout",
  "clear",
  "display",
  "float",
  "height",
  "max-height",
  "min-height",
  "width",
  "max-width",
  "min-width",
  "margin",
  "margin-bottom",
  "margin-top",
  "margin-left",
  "margin-right",
  "transition",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
];

const cssProperty: { [key: string]: string } = {};

cssProperties.forEach((prop) => {
  const key: unique symbol = Symbol(uppercased(prop));
  const key_c:unique symbol = Symbol(`${uppercased(prop)}_c`);

  Object.assign(cssProperty, { [key]: prop });
  Object.assign(cssProperty, { [key_c]: camelCase(prop) });
  //   cssProperty[key] = prop;
  //   cssProperty[`${uppercased(prop)}_c`] = camelCase(prop);
});

console.log(cssProperty);
// export { cssProperty };
