import {Dimensions, I18nManager} from 'react-native';

const {isRTL} = I18nManager;

const {width, height} = Dimensions.get('window');
/**
 * local imports
 */

const SCREEN_SPACING = 12;
const CONTENT_WIDTH = width - SCREEN_SPACING * 2;

export const MODAL_HEIGHT = height - 48;

export const SECONDARY_HEADER_HEIGHT = 248;

export const BUTTON_SIZE = {
  FULL: {width: CONTENT_WIDTH, height: 48},
};

export const PRODUCT_TILE = {
  HEIGHT: 192,
  GUTTER: 4,
};

export const widthStyles = {
  'w-content': `w-[${CONTENT_WIDTH}px]`,
};

export const heightStyles = {
  'h-header-lg': `h-[${SECONDARY_HEADER_HEIGHT}px]`,
};

export const generalStyles = {
  title: 'text-black text-5  text-left',
  subTitle: ' text-gray3  text-4.5 text-left',
};
export const typography = {
  'h1-reg': `font-LatoRegular text-6 text-white`,
  'h2-med': `font-LatoMedium text-5 text-black text-left `,
  'h2-reg': `font-LatoRegular text-5 text-black text-left `,
  'h3-bold': `font-LatoHeavy text-3.5 text-black text-left`,
  'h3-reg':  `font-LatoRegular text-3.5 text-black text-left`,
  'h4-reg':  `font-LatoRegular text-3 text-black text-left`,
  reg: 'font-LatoMedium',
  med: 'font-LatoRegular',
  bold: 'font-LatoHeavy',
};

export {CONTENT_WIDTH};
