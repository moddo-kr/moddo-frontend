import styled, { css } from 'styled-components';
import { getToken, getTypographyToken } from '@/shared/design-system';

const applyTypography = (key: Parameters<typeof getTypographyToken>[0]) => {
  const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } =
    getTypographyToken(key);

  return css`
    font-family: ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
  `;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.4')};
  width: 100%;
  background: ${getToken('fill.normal')};
  border: 1px solid ${getToken('border.neutral')};
  border-radius: ${getToken('radius.xl')};
  /* HACK: Figma py 18px, 가장 가까운 padding.6(20px) 사용 */
  padding: ${getToken('padding.6')};
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TitleText = styled.span`
  ${applyTypography('typography.title.small')}
  color: ${getToken('fg.neutral')};
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${getToken('fg.assistive')};
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlaceName = styled.span`
  ${applyTypography('typography.body.medium')}
  color: ${getToken('fg.alternative')};
`;

export const Amount = styled.span`
  ${applyTypography('typography.heading.small')}
  color: ${getToken('fg.normal')};
`;

export const SelectField = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${getToken('gap.1')};
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const CountText = styled.span`
  ${applyTypography('typography.body.small-semibold')}
  color: ${getToken('fg.alternative')};
`;

export const CountHighlight = styled.span`
  color: ${getToken('fg.primary.normal')};
`;

interface ChevronWrapperProps {
  $isOpen: boolean;
}

export const ChevronWrapper = styled.span<ChevronWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getToken('fg.alternative')};
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease-in-out;
`;

export const MemberChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: ${getToken('gap.2')};
  padding-top: ${getToken('gap.4')};
`;
