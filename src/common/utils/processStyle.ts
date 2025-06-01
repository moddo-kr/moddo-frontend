import { css } from 'styled-components';
import type * as CSS from 'csstype';
import type { BaseStyledProps } from '@/common/types/styled';
import type { ColorKey } from '@/styles/theme.type';
import { numberRegex } from '@/common/utils/regex';
import getColorFromTheme from '@/common/utils/getColorFromTheme';

/**
 * Unit을 가져오는 함수
 * theme.unit에 정의된 토큰을 사용하는 경우 해당 토큰의 값을 반환
 * 그 외의 경우에는 숫자 값을 px 단위로 변환하거나 그대로 반환
 */
const getUnit = (value: string | number | undefined) => css`
  ${({ theme }) => {
    if (value === undefined) return '';
    if (typeof value === 'number' || numberRegex.test(value)) {
      const numValue = Number(value);
      return theme.unit[numValue] || `${numValue}px`;
    }
    if (value in theme.unit) {
      return theme.unit[value as keyof typeof theme.unit];
    }
    return value;
  }}
`;

/**
 * Color 토큰을 가져오는 함수
 * theme.color에 정의된 토큰을 사용하는 경우 해당 토큰의 값을 반환
 * 그 외의 경우에는 색상 값을 그대로 반환
 */
const getColor = (value: string | ColorKey | undefined) => css`
  ${({ theme }) => {
    if (value === undefined) return '';
    if (typeof value === 'string' && value in theme.color) {
      return getColorFromTheme(theme.color, value as ColorKey) || value;
    }
    return value;
  }}
`;

/**
 * 조건부로 스타일을 적용하는 함수
 * 축약형을 우선으로 처리
 */
export const conditionalStyle = (
  cssProperty: keyof CSS.PropertiesHyphen,
  shorthand?: any,
  full?: any
) => {
  const value = shorthand ?? full ?? '';
  return value ? `${cssProperty}: ${value};` : '';
};

/**
 * 스타일 속성을 처리하는 함수
 * BaseStyledProps를 받아서 CSS 속성으로 변환
 * 축약형을 우선으로 처리합니다.
 */
export const processStyleProps = (props: BaseStyledProps) => css`
  /* Size props */
  ${props.width &&
  css`
    width: ${getUnit(props.width)};
  `}
  ${props.height &&
  css`
    height: ${getUnit(props.height)};
  `}

  /* Spacing Props */
  ${(props.pt ?? props.paddingTop) &&
  css`
    padding-top: ${getUnit(props.pt ?? props.paddingTop)};
  `}
  ${(props.pl ?? props.paddingLeft) &&
  css`
    padding-left: ${getUnit(props.pl ?? props.paddingLeft)};
  `}
  ${(props.pr ?? props.paddingRight) &&
  css`
    padding-right: ${getUnit(props.pr ?? props.paddingRight)};
  `}
  ${props.px &&
  css`
    padding-left: ${getUnit(props.px)};
    padding-right: ${getUnit(props.px)};
  `}
  ${props.py &&
  css`
    padding-top: ${getUnit(props.py)};
    padding-bottom: ${getUnit(props.py)};
  `}
  ${props.margin &&
  css`
    margin: ${getUnit(props.margin)};
  `}
  ${(props.mt ?? props.marginTop) &&
  css`
    margin-top: ${getUnit(props.mt ?? props.marginTop)};
  `}
  ${props.mx &&
  css`
    margin-left: ${getUnit(props.mx)};
    margin-right: ${getUnit(props.mx)};
  `}
  ${props.gap &&
  css`
    gap: ${getUnit(props.gap)};
  `}

  /* Border props */
  ${props.borderRadius &&
  css`
    border-radius: ${getUnit(props.borderRadius)};
  `}

  /* Position props */
  ${props.position &&
  css`
    position: ${props.position};
  `}

  /* Color props */
  ${props.color &&
  css`
    color: ${getColor(props.color)};
  `}
  ${(props.bgColor ?? props.backgroundColor) &&
  css`
    background-color: ${getColor(props.bgColor ?? props.backgroundColor)};
  `}

  /* Font props */
  ${props.fontSize &&
  css`
    font-size: ${getUnit(props.fontSize)};
  `}
`;
