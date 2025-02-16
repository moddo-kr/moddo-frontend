import {
  ColorType,
  PrimitiveColorType,
  RadiusType,
  SemanticColorType,
  Theme,
  TypographyType,
  UnitType,
} from './theme.type';

// ============================================
// 🎨 Colors
// ============================================

const PrimitiveColor: PrimitiveColorType = {
  base: {
    black: '#000000',
    white: '#ffffff',
  },
  blue: {
    50: '#e9f4fe',
    100: '#bbddfc',
    200: '#9accfb',
    300: '#6cb5f9',
    400: '#4fa7f8',
    500: '#2391f6',
    600: '#2084e0',
    700: '#1967af',
    800: '#135087',
    900: '#0f3d67',
  },
  gray: {
    50: '#f1f3f5',
    100: '#d2d4d5',
    200: '#acafb2',
    300: '#868a8f',
    400: '#6f7379',
    500: '#4b5058',
    600: '#444950',
    700: '#35393e',
    800: '#292c30',
    900: '#202225',
  },
  green: {
    50: '#edf9f2',
    100: '#c8ebd6',
    200: '#aee2c3',
    300: '#88d5a7',
    400: '#71cd96',
    500: '#4ec07c',
    600: '#47af71',
    700: '#378858',
    800: '#2b6a44',
    900: '#215134',
  },
  orange: {
    50: '#fdf0e7',
    100: '#ffd8be',
    200: '#ffc59f',
    300: '#ffaa73',
    400: '#ff9958',
    500: '#ff802e',
    600: '#e8742a',
    700: '#b55b21',
    800: '#8c4619',
    900: '#6b3613',
  },
  red: {
    50: '#fdefef',
    100: '#f8cecc',
    200: '#f5b6b4',
    300: '#f19492',
    400: '#ee807d',
    500: '#ea605c',
    600: '#d55754',
    700: '#a64441',
    800: '#813533',
    900: '#622827',
  },
  transparent: {
    black: {
      0: '#00000000',
      10: '#0000001a',
      20: '#00000033',
      40: '#00000066',
      60: '#00000099',
      80: '#000000cc',
    },
    white: {
      0: '#ffffff00',
      10: '#ffffff1a',
      20: '#ffffff33',
      40: '#ffffff66',
      60: '#ffffff99',
      80: '#ffffffcc',
    },
  },
  yellow: {
    50: '#fffcec',
    100: '#fdf5c3',
    200: '#fdf1a6',
    300: '#fcea7e',
    400: '#fbe665',
    500: '#fae03e',
    600: '#e4cc38',
    700: '#b29f2c',
    800: '#8a7b22',
    900: '#695e1a',
  },
} as const;

const SemanticColor: SemanticColorType = {
  background: {
    normal: {
      alternative: PrimitiveColor.gray[50],
      default: PrimitiveColor.base.white,
      disabled: PrimitiveColor.gray[100],
      inverse: PrimitiveColor.gray[600],
    },
    state: {
      danger: PrimitiveColor.red[50],
      info: PrimitiveColor.blue[50],
      success: PrimitiveColor.green[50],
      warning: PrimitiveColor.yellow[50],
    },
  },
  border: {
    default: PrimitiveColor.gray[100],
    disabled: PrimitiveColor.gray[100],
    inverse: PrimitiveColor.base.white,
    strong: PrimitiveColor.gray[800],
    subtle: PrimitiveColor.gray[50],
  },
  icon: {
    default: PrimitiveColor.gray[600],
    disabled: PrimitiveColor.gray[300],
    inverse: PrimitiveColor.base.white,
    strong: PrimitiveColor.gray[800],
    subtle: PrimitiveColor.gray[400],
  },
  orange: {
    default: PrimitiveColor.orange[500],
    heavy: PrimitiveColor.orange[700],
    strong: PrimitiveColor.orange[600],
    subtle: PrimitiveColor.orange[50],
  },
  primary: {
    default: PrimitiveColor.gray[600],
    heavy: PrimitiveColor.gray[800],
    strong: PrimitiveColor.gray[700],
    subtle: PrimitiveColor.gray[50],
  },
  secondary: {
    default: PrimitiveColor.gray[50],
    heavy: PrimitiveColor.gray[200],
    strong: PrimitiveColor.gray[100],
    subtle: PrimitiveColor.base.white,
  },
  state: {
    danger: PrimitiveColor.red[500],
    info: PrimitiveColor.blue[500],
    success: PrimitiveColor.green[500],
    warning: PrimitiveColor.yellow[500],
  },
  text: {
    default: PrimitiveColor.gray[600],
    disabled: PrimitiveColor.gray[300],
    inverse: PrimitiveColor.base.white,
    strong: PrimitiveColor.gray[800],
    subtle: PrimitiveColor.gray[400],
  },
} as const;

const color: ColorType = {
  primitive: PrimitiveColor,
  semantic: SemanticColor,
} as const;

// ============================================
// 📏 Unit & Radius
// ============================================

const unit: UnitType = {
  0: '0rem',
  1: '0.0625rem',
  2: '0.125rem',
  4: '0.25rem',
  6: '0.375rem',
  8: '0.5rem',
  10: '0.625rem',
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  24: '1.5rem',
  28: '1.75rem',
  32: '2rem',
  36: '2.25rem',
  40: '2.5rem',
  44: '2.75rem',
  48: '3rem',
  56: '3.5rem',
  64: '4rem',
  72: '4.5rem',
  80: '5rem',
  96: '6rem',
  128: '8rem',
  max: '624.9375rem',
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

export const theme: Theme = {
  color,
  unit,
  radius,
  typography,
} as const;
