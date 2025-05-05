import {
  ColorType,
  PrimitiveColorType,
  SemanticColorType,
  RadiusType,
  Theme,
  TypographyType,
  UnitType,
} from './theme.type';

// ============================================
// 🎨 Colors
// ============================================

const primitiveColor: PrimitiveColorType = {
  base: { white: '#FFFFFF', black: '#000000' },
  gray: {
    100: '#F1F3F5',
    200: '#D2D4D5',
    300: '#ACAFB2',
    400: '#868A8F',
    500: '#6F7379',
    600: '#444950',
    700: '#292C30',
  },
  orange: {
    100: '#FDF0E7',
    200: '#FFD8BE',
    300: '#FFB17F',
    400: '#FF9958',
    500: '#E8742A',
    600: '#B55B21',
  },
  red: {
    100: '#FDEFEF',
    200: '#F8CECC',
    300: '#F29997',
    400: '#EA605C',
    500: '#D14643',
    600: '#9A3F3C',
  },
  yellow: {
    100: '#FFFCEC',
    200: '#FDF5C3',
    300: '#FCED92',
    400: '#FAE03E',
    500: '#EAC706',
    600: '#A99004',
  },
  blue: {
    100: '#E9F4FE',
    200: '#BBDDFC',
    300: '#89C4FA',
    400: '#2391F6',
    500: '#1D7CD2',
    600: '#155A98',
  },
  green: {
    100: '#EDF9F2',
    200: '#CBECD8',
    300: '#9DDCB7',
    400: '#4EC07C',
    500: '#3C9560',
    600: '#2B6A44',
  },
  transparent: {
    white0: '#FFFFFF00',
    white10: '#FFFFFF1A',
    white20: '#FFFFFF33',
    white40: '#FFFFFF66',
    white60: '#FFFFFF99',
    white80: '#FFFFFFCC',
    black0: '#00000000',
    black10: '#0000001A',
    black20: '#00000033',
    black40: '#00000066',
    black60: '#00000099',
    black80: '#000000CC',
  },
} as const;

const semanticColor: SemanticColorType = {
  primary: {
    subtle: primitiveColor.orange[100],
    default: primitiveColor.orange[400],
    strong: primitiveColor.orange[500],
    heavy: primitiveColor.orange[600],
  },
  secondary: {
    subtle: primitiveColor.base.white,
    default: primitiveColor.gray[100],
    strong: primitiveColor.gray[200],
    heavy: primitiveColor.gray[300],
  },
  state: {
    danger: primitiveColor.red[400],
    warning: primitiveColor.yellow[400],
    info: primitiveColor.blue[400],
    success: primitiveColor.green[400],
  },
  text: {
    strong: primitiveColor.gray[700],
    default: primitiveColor.gray[600],
    subtle: primitiveColor.gray[400],
    disabled: primitiveColor.gray[300],
    inverse: primitiveColor.base.white,
  },
  icon: {
    strong: primitiveColor.gray[700],
    default: primitiveColor.gray[600],
    subtle: primitiveColor.gray[400],
    disabled: primitiveColor.gray[300],
    inverse: primitiveColor.base.white,
  },
  border: {
    strong: primitiveColor.gray[700],
    default: primitiveColor.gray[200],
    subtle: primitiveColor.gray[100],
    disabled: primitiveColor.gray[200],
    inverse: primitiveColor.base.white,
  },
  background: {
    normal: {
      default: primitiveColor.base.white,
      alternative: primitiveColor.gray[100],
      disabled: primitiveColor.gray[200],
      inverse: primitiveColor.gray[600],
    },
    state: {
      danger: primitiveColor.red[100],
      warning: primitiveColor.yellow[100],
      info: primitiveColor.blue[100],
      success: primitiveColor.green[100],
    },
  },
} as const;

const color: ColorType = {
  primitive: primitiveColor,
  semantic: semanticColor,
} as const;

// ============================================
// 📏 Unit & Radius
// ============================================

const unit: UnitType = {
  0: '0', // 0px
  1: '0.0625rem', // 1px
  2: '0.125rem', // 2px
  4: '0.25rem', // 4px
  6: '0.375rem', // 6px
  8: '0.5rem', // 8px
  10: '0.625rem', // 10px
  12: '0.75rem', // 12px
  14: '0.875rem', // 14px
  16: '1rem', // 16px
  18: '1.125rem', // 18px
  20: '1.25rem', // 20px
  24: '1.5rem', // 24px
  28: '1.75rem', // 28px
  32: '2rem', // 32px
  36: '2.25rem', // 36px
  40: '2.5rem', // 40px
  44: '2.75rem', // 44px
  48: '3rem', // 48px
  56: '3.5rem', // 56px
  64: '4rem', // 64px
  72: '4.5rem', // 72px
  80: '5rem', // 80px
  96: '6rem', // 96px
  128: '8rem', // 128px
  max: '624.9375rem', // 9999px
} as const;

const radius: RadiusType = {
  default: unit[12],
  large: unit[20],
  circle: unit.max,
} as const;

// ============================================
// 🔠 Typography
// ============================================

const typography: TypographyType = {
  fontFamily: 'Pretendard',
  fontSize: {
    heading1: unit[24],
    heading2: unit[20],
    title: unit[18],
    body1Sb: unit[16],
    body1R: unit[16],
    body2Sb: unit[14],
    body2R: unit[14],
    caption: unit[12],
  },
  fontWeight: {
    heading1: 700,
    heading2: 700,
    title: 600,
    body1Sb: 600,
    body1R: 400,
    body2Sb: 600,
    body2R: 400,
    caption: 500,
  },
  lineHeight: {
    heading1: '150%',
    heading2: '150%',
    title: '150%',
    body1Sb: '150%',
    body1R: '150%',
    body2Sb: '150%',
    body2R: '150%',
    caption: '150%',
  },
  letterSpacing: {
    typoFontSpacing0: unit[0],
    typoFontSpacing1: unit[1],
  },
} as const;

// ============================================
// 🎨 Theme
// ============================================

const theme: Theme = {
  color,
  unit,
  radius,
  typography,
} as const;

export default theme;
