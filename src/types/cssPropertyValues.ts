import { cssValue } from "./cssValues";
import { COLOR } from "@sil/color";
import { cssProperty } from "./cssProperties";


export type time = string | number;

/*
    Position
*/
export type position =
  | typeof cssValue.ABSOLUTE
  | typeof cssValue.RELATIVE
  | typeof cssValue.STATIC
  | typeof cssValue.FIXED;

/*
    Background
*/
export type background = string;
export type backgroundAttachment =
  | typeof cssValue.SCROLL
  | typeof cssValue.FIXED;
export type backgroundBreak =
  | typeof cssValue.BOUNDING_BOX
  | typeof cssValue.EACH_BOX
  | typeof cssValue.CONTINOUS;
export type backgroundClip =
  | typeof cssValue.BORDER_BOX
  | typeof cssValue.PADDING_BOX
  | typeof cssValue.CONTENT_BOX
  | typeof cssValue.NO_CLIP;
export type backgroundSize = string;
export type backgroundRepeat =
  | typeof cssValue.REPEAT
  | typeof cssValue.REPEAT_X
  | typeof cssValue.REPEAT_Y
  | typeof cssValue.NO_REPEAT
  | string;
export type backgroundColor = COLOR | string;
export type backgroundImage = typeof cssValue.NONE | string;
export type backgroundOrigin =
  | typeof cssValue.BORDER_BOX
  | typeof cssValue.PADDING_BOX
  | typeof cssValue.CONTENT_BOX
  | number
  | string;
export type backgroundPosition =
  | typeof cssValue.TOP_LEFT
  | typeof cssValue.TOP_CENTER
  | typeof cssValue.TOP_RIGHT
  | typeof cssValue.CENTER_LEFT
  | typeof cssValue.CENTER_CENTER
  | typeof cssValue.CENTER_RIGHT
  | typeof cssValue.BOTTOM_LEFT
  | typeof cssValue.BOTTOM_CENTER
  | typeof cssValue.BOTTOM_RIGHT
  | number
  | string;

/*
    Border
*/

export type border = string | borderStyle | borderWidth | borderColor;

export type borderStyle =
  | typeof cssValue.SOLID
  | typeof cssValue.NONE
  | typeof cssValue.HIDDEN
  | typeof cssValue.DOTTED
  | typeof cssValue.DASHED
  | typeof cssValue.DOUBLE
  | typeof cssValue.GROOVE
  | typeof cssValue.RIDGE
  | typeof cssValue
  | typeof cssValue.INSET
  | typeof cssValue.OUTSET;
export type borderWidth =
  | typeof cssValue.THIN
  | typeof cssValue.MEDIUM
  | typeof cssValue.THICK
  | string
  | number;

export type borderColor = COLOR | string;
export type borderImage = string;
export type borderCollapse = typeof cssValue.COLLAPSE | typeof cssValue.SEPARATE;
export type borderBreak = borderWidth | borderStyle | COLOR | string | typeof cssValue.CLOSE

export type borderRadius = string | number;
export type boxShadow = string;


export type borderSpacing = number | string;
export type captionSide = typeof cssValue.TOP | typeof cssValue.BOTTOM | typeof cssValue.LEFT | typeof cssValue.RIGHT | string; 
export type emptyCells = typeof cssValue.SHOW | typeof cssValue.HIDE;
export type tableLayout = typeof cssValue.AUTO | typeof cssValue.FIXED;

export type margin = string | number;

const cubicBezier = (p0: number,p1: number,p2: number,p3: number):void=>{}

export type transitionTimingFunction = typeof cssValue.EASE | typeof cssValue.LINEAR | typeof cssValue.EASE_IN| typeof cssValue.EASE_IN_OUT | typeof cssValue.EASE_OUT | typeof cubicBezier;
export type transition = transitionTimingFunction | time | string;
export type transitionDelay = time;
export type transitionDuration = time;
export type transitionProperty = typeof cssValue.NONE | typeof cssValue.ALL | typeof cssValue.INITIAL | typeof cssValue.INHERIT | typeof cssProperty;

