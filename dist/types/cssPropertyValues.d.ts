import { cssValue } from "./cssValues";
import { COLOR } from "@sil/color";
import { cssProperty } from "./cssProperties";
export declare type time = string | number;
export declare type position = typeof cssValue.ABSOLUTE | typeof cssValue.RELATIVE | typeof cssValue.STATIC | typeof cssValue.FIXED;
export declare type background = string;
export declare type backgroundAttachment = typeof cssValue.SCROLL | typeof cssValue.FIXED;
export declare type backgroundBreak = typeof cssValue.BOUNDING_BOX | typeof cssValue.EACH_BOX | typeof cssValue.CONTINOUS;
export declare type backgroundClip = typeof cssValue.BORDER_BOX | typeof cssValue.PADDING_BOX | typeof cssValue.CONTENT_BOX | typeof cssValue.NO_CLIP;
export declare type backgroundSize = string;
export declare type backgroundRepeat = typeof cssValue.REPEAT | typeof cssValue.REPEAT_X | typeof cssValue.REPEAT_Y | typeof cssValue.NO_REPEAT | string;
export declare type backgroundColor = COLOR | string;
export declare type backgroundImage = typeof cssValue.NONE | string;
export declare type backgroundOrigin = typeof cssValue.BORDER_BOX | typeof cssValue.PADDING_BOX | typeof cssValue.CONTENT_BOX | number | string;
export declare type backgroundPosition = typeof cssValue.TOP_LEFT | typeof cssValue.TOP_CENTER | typeof cssValue.TOP_RIGHT | typeof cssValue.CENTER_LEFT | typeof cssValue.CENTER_CENTER | typeof cssValue.CENTER_RIGHT | typeof cssValue.BOTTOM_LEFT | typeof cssValue.BOTTOM_CENTER | typeof cssValue.BOTTOM_RIGHT | number | string;
export declare type border = string | borderStyle | borderWidth | borderColor;
export declare type borderStyle = typeof cssValue.SOLID | typeof cssValue.NONE | typeof cssValue.HIDDEN | typeof cssValue.DOTTED | typeof cssValue.DASHED | typeof cssValue.DOUBLE | typeof cssValue.GROOVE | typeof cssValue.RIDGE | typeof cssValue | typeof cssValue.INSET | typeof cssValue.OUTSET;
export declare type borderWidth = typeof cssValue.THIN | typeof cssValue.MEDIUM | typeof cssValue.THICK | string | number;
export declare type borderColor = COLOR | string;
export declare type borderImage = string;
export declare type borderCollapse = typeof cssValue.COLLAPSE | typeof cssValue.SEPARATE;
export declare type borderBreak = borderWidth | borderStyle | COLOR | string | typeof cssValue.CLOSE;
export declare type borderRadius = string | number;
export declare type boxShadow = string;
export declare type borderSpacing = number | string;
export declare type captionSide = typeof cssValue.TOP | typeof cssValue.BOTTOM | typeof cssValue.LEFT | typeof cssValue.RIGHT | string;
export declare type emptyCells = typeof cssValue.SHOW | typeof cssValue.HIDE;
export declare type tableLayout = typeof cssValue.AUTO | typeof cssValue.FIXED;
export declare type margin = string | number;
declare const cubicBezier: (p0: number, p1: number, p2: number, p3: number) => void;
export declare type transitionTimingFunction = typeof cssValue.EASE | typeof cssValue.LINEAR | typeof cssValue.EASE_IN | typeof cssValue.EASE_IN_OUT | typeof cssValue.EASE_OUT | typeof cubicBezier;
export declare type transition = transitionTimingFunction | time | string;
export declare type transitionDelay = time;
export declare type transitionDuration = time;
export declare type transitionProperty = typeof cssValue.NONE | typeof cssValue.ALL | typeof cssValue.INITIAL | typeof cssValue.INHERIT | typeof cssProperty;
export {};
//# sourceMappingURL=cssPropertyValues.d.ts.map