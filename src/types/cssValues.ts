import { camelCase } from "@sil/case";
import { uppercased } from "../helpers";

const cssValues = [
  "above",
  "absolute",
  "adjecent",
  "after",
  "all",
  "alternate",
  "armenian",
  "auto",
  "back",
  "before",
  "behind",
  "bidioverride",
  "blink",
  "block",
  "bold",
  "bolder",
  "border-box",
  "bottom",
  "bottomcenter",
  "bottomleft",
  "bottomright",
  "bounding-box",
  "break-all",
  "break-strict",
  "break-word",
  "button",
  "capitalize",
  "caption",
  "center",
  "centercenter",
  "centerleft",
  "centerright",
  "checkbox",
  "checkboxgroup",
  "clip",
  "close",
  "collapse",
  "combo-box",
  "compact",
  "condensed",
  "contain",
  "content-box",
  "continuous",
  "cover",
  "crop",
  "cross",
  "crosshair",
  "current",
  "dashed",
  "decimal",
  "decimal-leading-zero",
  "default",
  "desktop",
  "dialog",
  "disc",
  "distribute",
  "distribute-letter",
  "distribute-space",
  "document",
  "dotted",
  "double",
  "e-resize",
  "each-box",
  "ease",
  "ease-in",
  "ease-in-out",
  "ease-out",
  "endedge",
  "expanded",
  "extracondensed",
  "extra-expanded",
  "fast",
  "field",
  "first",
  "fixed",
  "front",
  "georgian",
  "groove",
  "help",
  "hidden",
  "hide",
  "horizontal",
  "hyperlink",
  "icon",
  "inherit",
  "initial",
  "inline",
  "inline-block",
  "inline-end",
  "inline-start",
  "inline-table",
  "inset",
  "inside",
  "inter-cluster",
  "inter-word",
  "interideograph",
  "italic",
  "justify",
  "kashida",
  "keep-all",
  "large",
  "larger",
  "last",
  "left",
  "lighter",
  "line-through",
  "linear",
  "lineedge",
  "list-item",
  "list-menu",
  "loose",
  "lower-alpha",
  "lower-greek",
  "lower-latin",
  "lower-roman",
  "lowercase",
  "ltr",
  "marquee-block",
  "marquee-line",
  "medium",
  "menu",
  "menubar",
  "menuitem",
  "message-box",
  "modal",
  "move",
  "nresize",
  "narrower",
  "ne-resize",
  "new",
  "no-clip",
  "no-display",
  "no-repeat",
  "nowrap",
  "nocontent",
  "none",
  "normal",
  "nw-resize",
  "oblique",
  "outline-tree",
  "outset",
  "outside",
  "overline",
  "padding-box",
  "password",
  "pointer",
  "pop-up-menu",
  "pre",
  "pre-line",
  "preserver",
  "prewrap",
  "pull-down-menu",
  "pushbutton",
  "radio-group",
  "radiobutton",
  "range",
  "relative",
  "repeat",
  "repeat-x",
  "repeat-y",
  "revert",
  "revert-layer",
  "ridge",
  "right",
  "root",
  "round",
  "rtl",
  "ruby",
  "ruby-base",
  "ruby-base-group",
  "ruby-text",
  "ruby-text-group",
  "run-in",
  "s-resize",
  "scroll",
  "se-resize",
  "semi-condensed",
  "semiexpanded",
  "separate",
  "show",
  "signature",
  "slide",
  "slow",
  "small",
  "small-caps",
  "smallcaption",
  "smaller",
  "solid",
  "square",
  "static",
  "status-bar",
  "stretch",
  "suppress",
  "sw-resize",
  "tab",
  "table",
  "table-cell",
  "table-column",
  "table-column-group",
  "table-footer-group",
  "table-header-group",
  "table-row",
  "table-row-group",
  "table-caption",
  "text",
  "thick",
  "thin",
  "tibetan",
  "tooltip",
  "top",
  "topcenter",
  "topleft",
  "topright",
  "transparent",
  "ultra-condensed",
  "ultraexpanded",
  "underline",
  "unrestricted",
  "unset",
  "upper-alpha",
  "upper-latin",
  "upper-roman",
  "uppercase",
  "vertical",
  "visible",
  "w-resize",
  "wait",
  "wider",
  "window",
  "workspace",
  "x-large",
  "x-small",
  "xx-large",
  "xx-small",
];

const cssValue: { [key: string]: string } = {};

cssValues.forEach((prop) => {
  cssValue[uppercased(prop)] = prop;
  cssValue[`${uppercased(prop)}_c`] = camelCase(prop);
});

export { cssValue };