import { cssValue } from "./cssValues";
import { cssProperty } from "./cssProperties";
import * as cssPropertyValue from "./cssPropertyValues";

export interface Element {
  // [cssProperty.POSITION]?: string;
  // [cssProperty.POSITION]?: cssPropertyValue.position;
  // [cssProperty.BACKGROUND]?: cssPropertyValue.background;
  // [cssProperty.BACKGROUND_IMAGE]?: cssPropertyValue.backgroundImage;
  // [cssProperty.BACKGROUND_POSITION]?: cssPropertyValue.backgroundPosition;
  // [cssProperty.BACKGROUND_SIZE]?: cssPropertyValue.backgroundSize;
  // [cssProperty.BACKGROUND_REPEAT]?: cssPropertyValue.backgroundRepeat;
  // [cssProperty.BACKGROUND_ATTACHMENT]?: cssPropertyValue.backgroundAttachment;
  // [cssProperty.BACKGROUND_ORIGIN]?: cssPropertyValue.backgroundOrigin;
  // [cssProperty.BACKGROUND_CLIP]?: cssPropertyValue.backgroundClip;
  // [cssProperty.BACKGROUND_COLOR]?: cssPropertyValue.backgroundColor;
  // [cssProperty.BORDER]?: cssPropertyValue.border;
  // [cssProperty.BORDER_BOTTOM]?: cssPropertyValue.border;
  // [cssProperty.BORDER_BOTTOM_STYLE]?: cssPropertyValue.borderStyle;
  // [cssProperty.BORDER_BOTTOM_WIDTH]?: cssPropertyValue.borderWidth;
  // [cssProperty.BORDER_BOTTOM_COLOR]?: cssPropertyValue.borderColor;
  // [cssProperty.BORDER_TOP]?: cssPropertyValue.border;
  // [cssProperty.BORDER_TOP_STYLE]?: cssPropertyValue.borderStyle;
  // [cssProperty.BORDER_TOP_WIDTH]?: cssPropertyValue.borderWidth;
  // [cssProperty.BORDER_TOP_COLOR]?: cssPropertyValue.borderColor;
  // [cssProperty.BORDER_LEFT]?: cssPropertyValue.border;
  // [cssProperty.BORDER_LEFT_STYLE]?: cssPropertyValue.borderStyle;
  // [cssProperty.BORDER_LEFT_WIDTH]?: cssPropertyValue.borderWidth;
  // [cssProperty.BORDER_LEFT_COLOR]?: cssPropertyValue.borderColor;
  // [cssProperty.BORDER_RIGHT]?: cssPropertyValue.border;
  // [cssProperty.BORDER_RIGHT_STYLE]?: cssPropertyValue.borderStyle;
  // [cssProperty.BORDER_RIGHT_WIDTH]?: cssPropertyValue.borderWidth;
  // [cssProperty.BORDER_RIGHT_COLOR]?: cssPropertyValue.borderColor;
  // [cssProperty.BORDER_BLOCK_START]?: cssPropertyValue.border;
  // [cssProperty.BORDER_BLOCK_END]?: cssPropertyValue.border;
  // [cssProperty.BORDER_INLINE_START]?: cssPropertyValue.border;
  // [cssProperty.BORDER_INLINE_END]?: cssPropertyValue.border;
  // [cssProperty.BORDER_COLLAPSE]?: cssPropertyValue.borderCollapse;
  // [cssProperty.BORDER_BREAK]?: cssPropertyValue.borderBreak;
  // [cssProperty.BORDER_RADIUS]?: cssPropertyValue.borderRadius;
  // [cssProperty.BORDER_TOP_RIGHT_RADIUS]?: cssPropertyValue.borderRadius;
  // [cssProperty.BORDER_TOP_LEFT_RADIUS]?: cssPropertyValue.borderRadius;
  // [cssProperty.BORDER_BOTTOM_RIGHT_RADIUS]?: cssPropertyValue.borderRadius;
  // [cssProperty.BORDER_BOTTOM_LEFT_RADIUS]?: cssPropertyValue.borderRadius;
  // [cssProperty.BOX_SHADOW]?: cssPropertyValue.boxShadow;
  // [cssProperty.BORDER_SPACING]?: cssPropertyValue.boxShadow;
  // [cssProperty.CAPTION_SIDE]?: cssPropertyValue.captionSide;
  // [cssProperty.EMPTY_CELLS]?: cssPropertyValue.emptyCells;
  // [cssProperty.TABLE_LAYOUT]?: cssPropertyValue.tableLayout;
  // [cssProperty.MARGIN]?: cssPropertyValue.margin;
  // [cssProperty.MARGIN_LEFT]?: cssPropertyValue.margin;
  // [cssProperty.MARGIN_RIGHT]?: cssPropertyValue.margin;
  // [cssProperty.MARGIN_TOP]?: cssPropertyValue.margin;
  // [cssProperty.MARGIN_BOTTOM]?: cssPropertyValue.margin;
  // [cssProperty.TRANSITION]?: cssPropertyValue.transition;
  // [cssProperty.TRANSITION_TIMING_FUNCTION]?: cssPropertyValue.transitionTimingFunction;
  // [cssProperty.TRANSITION_DELAY]?: cssPropertyValue.transitionDelay;
  // [cssProperty.TRANSITION_DURATION]?: cssPropertyValue.transitionDuration;
  // [cssProperty.TRANSITION_PROPERTY]?: cssPropertyValue.transitionProperty;
}

const cubicBezier = () => {};

const test: Element = {
  position: "absolute",
  // 'transition-timing-function': cubicBezier(0,0,0,0),
  // transitionTimingFunction: "ease"
};

const test2: Element = {
  position: cssValue.ABSOLUTE,
};
