import { FlattenKeys } from '@/common/types/utility.type';

// ============================================
// 📦 Theme Type
// ============================================

export type Theme = {
  color: ColorType;
  unit: UnitType;
  radius: RadiusType;
  typography: TypographyType;
};

export type ColorType = {
  primitive: PrimitiveColorType;
  semantic: SemanticColorType;
};

export type ColorKey = FlattenKeys<ColorType>;

export type UnitType = Record<number | 'max', string>;

export type RadiusType = {
  default: string;
  large: string;
  circle: string;
};

export type TypographyType = {
  fontFamily: string;
  fontSize: Record<TypographyKey, string>;
  fontWeight: Record<TypographyKey, number>;
  lineHeight: Record<TypographyKey, string>;
  letterSpacing: {
    typoFontSpacing0: string;
    typoFontSpacing1: string;
  };
};

// ============================================
// 🎨 Primitive Colors
// ============================================

export type PrimitiveColorType = {
  base: Partial<Record<'black' | 'white', string>>;
  blue: ColorShades;
  gray: ColorShades;
  green: ColorShades;
  orange: ColorShades;
  red: ColorShades;
  transparent: TransparentColors;
  yellow: ColorShades;
};

type ColorShades = Partial<
  Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>
>;

type TransparentColors = {
  black: Partial<Record<0 | 10 | 20 | 40 | 60 | 80, string>>;
  white: Partial<Record<0 | 10 | 20 | 40 | 60 | 80, string>>;
};

// ============================================
// 🏷️ Semantic Colors
// ============================================

export type SemanticColorType = {
  background: SemanticBackground;
  border: SemanticVariant;
  icon: SemanticVariant;
  orange: SemanticVariant;
  primary: SemanticVariant;
  secondary: SemanticVariant;
  state: SemanticState;
  text: SemanticVariant;
};

type SemanticVariant = Partial<
  Record<
    'default' | 'heavy' | 'strong' | 'subtle' | 'disabled' | 'inverse',
    string
  >
>;
type SemanticState = Partial<
  Record<'danger' | 'info' | 'success' | 'warning', string>
>;
type SemanticBackground = {
  normal: Partial<
    Record<'alternative' | 'default' | 'disabled' | 'inverse', string>
  >;
  state: SemanticState;
};

// ============================================
// 🔠 Typography
// ============================================

export type TypographyKey =
  | 'heading1'
  | 'heading2'
  | 'title'
  | 'body1Sb'
  | 'body1R'
  | 'body2Sb'
  | 'body2R'
  | 'caption';
