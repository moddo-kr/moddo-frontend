// ============================================
// 📦 Theme Type
// ============================================

export type Theme = {
  color: ColorType;
  unit: UnitType;
  radius: RadiusType;
  typography: TypographyType;
};

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
// 🎨 primitive color type
// ============================================

export type BaseColorType = {
  white: string;
  black: string;
};

export type GrayScaleType = Record<
  100 | 200 | 300 | 400 | 500 | 600 | 700,
  string
>;

// Gray를 제외한 색상들의 스케일
export type ColorScaleType = Record<100 | 200 | 300 | 400 | 500 | 600, string>;

export type TransparentAlphaType = 0 | 10 | 20 | 40 | 60 | 80;
export type TransparentType = Record<
  `white${TransparentAlphaType}` | `black${TransparentAlphaType}`,
  string
>;

export type PrimitiveColorType = {
  base: BaseColorType;
  gray: GrayScaleType;
  orange: ColorScaleType;
  red: ColorScaleType;
  yellow: ColorScaleType;
  blue: ColorScaleType;
  green: ColorScaleType;
  transparent: TransparentType;
};

// ============================================
// 🎨 semantic color type
// ============================================

export type ColorVariantType = {
  subtle: string;
  default: string;
  strong: string;
  heavy: string;
};

export type ColorStateType = {
  danger: string;
  warning: string;
  info: string;
  success: string;
};

export type ColorEmphasisType = {
  strong: string;
  default: string;
  subtle: string;
  disabled: string;
  inverse: string;
};

export type BackgroundColor = {
  normal: Record<'default' | 'alternative' | 'disabled' | 'inverse', string>;
  state: ColorStateType;
};

export type SemanticColorType = {
  primary: ColorVariantType;
  secondary: ColorVariantType;
  state: ColorStateType;
  text: ColorEmphasisType;
  icon: ColorEmphasisType;
  border: ColorEmphasisType;
  background: BackgroundColor;
};

// ============================================
// 🎨 color type
// ============================================

export type ColorType = {
  primitive: PrimitiveColorType;
  semantic: SemanticColorType;
};

/**
 * @description
 * ColorTokenPath의 재귀 깊이를 줄이기 위한 유틸리티 타입
 * 재귀적으로 동작하는 유틸리티 타입에서는 무한 루프를 방지하기 위한 에러가 발생해서 재귀 깊이를 제한해야 합니다.
 * 직접적인 감소 연산 (-1) 사용이 불가능하기 때문에 배열을 사용해서 재귀 깊이를 조절합니다.
 * @example
 * DepthDecrement[6] = 5
 * DepthDecrement[5] = 4
 * DepthDecrement[4] = 3
 * DepthDecrement[3] = 2
 * DepthDecrement[2] = 1
 * DepthDecrement[1] = 0 // 재귀 종료
 */
type DepthDecrement = [never, 0, 1, 2, 3, 4, 5];

/**
 * @description
 * ColorType의 키의 경로를 타입으로 변환하는 유틸리티 타입
 * @template T - 디자인 토큰 객체 타입
 * @template P - 현재까지의 경로 접두사
 * @template D - 최대 재귀 깊이 (기본값: 5)
 */
type ColorTokenPath<
  T,
  P extends string = '',
  D extends number = 5,
> = D extends 0
  ? never // 무한 루프를 방지하기 위해 재귀 깊이 제한에 도달하면 종료
  : T extends Record<string | number, unknown>
    ? {
        [K in keyof T]: K extends string | number
          ? T[K] extends Record<string | number, unknown> // 객체인 경우에는 재귀적으로 호출
            ? ColorTokenPath<T[K], `${P}${K}.`, DepthDecrement[D]> // Decrement[D]로 깊이 감소
            : `${P}${K}` // 객체가 아닌 경우(leaf)에는 현재 키를 포함한 경로 반환
          : never; // K가 string | number가 아닌 경우는 무시
      }[keyof T]
    : never; // T가 객체가 아닌 경우는 무시

/**
 * @example
 * ColorTokenPath<ColorType> =
 *   | 'primitive.base.white'
 *   | 'primitive.base.black'
 *   | 'primitive.gray.100'
 *   | ...
 *   | 'semantic.background.normal.inverse';
 */
export type ColorTokenType = ColorTokenPath<ColorType>;

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
