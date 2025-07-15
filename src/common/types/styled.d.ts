import { CSSProperties } from 'react';
import type { Theme } from '@/styles/theme.type';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export interface SizeProps extends Pick<CSSProperties, 'width' | 'height'> {
  // 필요한 경우 추가
}

export interface SpacingProps
  extends Pick<
    CSSProperties,
    | 'padding'
    | 'paddingTop'
    | 'paddingBottom'
    | 'paddingLeft'
    | 'paddingRight'
    | 'margin'
    | 'marginTop'
    | 'marginBottom'
    | 'marginLeft'
    | 'marginRight'
    | 'gap'
  > {
  // padding 축약형
  p?: CSSProperties['padding'];
  pt?: CSSProperties['paddingTop'];
  pb?: CSSProperties['paddingBottom'];
  pl?: CSSProperties['paddingLeft'];
  pr?: CSSProperties['paddingRight'];
  px?: CSSProperties['paddingLeft'];
  py?: CSSProperties['paddingTop'];
  // margin 축약형
  m?: CSSProperties['margin'];
  mt?: CSSProperties['marginTop'];
  mb?: CSSProperties['marginBottom'];
  ml?: CSSProperties['marginLeft'];
  mr?: CSSProperties['marginRight'];
  mx?: CSSProperties['marginLeft'];
  my?: CSSProperties['marginTop'];
}

export interface ColorProps
  extends Pick<CSSProperties, 'color' | 'backgroundColor'> {
  bgColor?: CSSProperties['backgroundColor'];
}

export interface BorderProps extends Pick<CSSProperties, 'borderRadius'> {
  // 필요한 경우 추가
}

export interface PositionProps extends Pick<CSSProperties, 'position'> {
  // 필요한 경우 추가
}

export interface FontProps extends Pick<CSSProperties, 'fontSize'> {
  // 필요한 경우 추가
}

export type BaseStyledProps = SpacingProps &
  SizeProps &
  ColorProps &
  BorderProps &
  PositionProps &
  FontProps;

/* Flex */
export interface FlexLayoutStyledProps
  extends Pick<
    CSSProperties,
    | 'flexDirection'
    | 'flexWrap'
    | 'justifyContent'
    | 'alignItems'
    | 'alignContent'
    | 'flexBasis'
    | 'flexGrow'
    | 'flexShrink'
  > {
  direction?: CSSProperties['flexDirection'];
  inline?: boolean;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: CSSProperties['flexWrap'];
  basis?: CSSProperties['flexBasis'];
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
}

export type FlexStyledProps = FlexLayoutStyledProps & BaseStyledProps;
