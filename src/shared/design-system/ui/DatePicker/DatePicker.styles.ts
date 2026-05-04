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

export const TriggerWrapper = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${getToken('gap.4')};
  padding: ${getToken('padding.1')} ${getToken('gap.8')};
`;

export const HeaderLabel = styled.span`
  ${applyTypography('typography.body.medium-semibold')}
  /* HACK: Figma --text/default(#444950 = gray.40)에 대응하는 token 없음, fg.neutral(gray.30) 사용 */
  color: ${getToken('fg.neutral')};
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${getToken('fg.neutral')};
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker-popper {
    width: 100%;
  }

  .react-datepicker__month-container {
    width: 100%;
  }

  .react-datepicker {
    width: 100%;
    min-width: 310px;
    padding-top: ${getToken('padding.3')};
    border-radius: ${getToken('radius.lg')};
    border: 1px solid ${getToken('border.neutral')};
    background: ${getToken('fill.normal')};
    /* HACK: shadow token 없음 */
    box-shadow: 3px 4px 7.5px 0px rgba(0, 0, 0, 0.09);
    font-family: inherit;
  }

  .react-datepicker__header {
    background: transparent;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__day-names {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    place-items: center;
    height: 24px;
    padding: 0 ${getToken('padding.5')};
    margin-top: ${getToken('gap.4')};

    .react-datepicker__day-name {
      /* HACK: Figma 15px에 대응하는 token 없음, body.small(14px) 사용 */
      ${applyTypography('typography.body.small')}
      color: ${getToken('fg.primary.normal')};
      width: 100%;
      margin: 0;
      text-align: center;
    }
  }

  .react-datepicker__month {
    margin: ${getToken('gap.4')} 0;
    padding: 0 ${getToken('padding.5')};
  }

  .react-datepicker__week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    place-items: center;
    height: 44px;
  }

  .react-datepicker__day {
    display: flex;
    align-items: center;
    justify-content: center;
    ${applyTypography('typography.body.small')}
    /* HACK: Figma --text/strong(#292c30 = gray.20)에 대응하는 token 없음, fg.normal(gray.10) 사용 */
    color: ${getToken('fg.normal')};
    width: 100%;
    aspect-ratio: 1 / 1;
    padding: 0;
    margin: 0;
    border-radius: ${getToken('radius.full')};
    opacity: 0.8;

    &:hover {
      background: ${getToken('fill.alternative')};
      opacity: 1;
    }
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--selected:hover {
    background: ${getToken('fill.primary.normal')};
    color: ${getToken('fg.static-white')};
    opacity: 1;
  }

  .react-datepicker__day--outside-month {
    color: ${getToken('fg.normal-disable')};
    opacity: 0.56;
  }

  .react-datepicker__day--today {
    font-weight: bold;
  }

  .react-datepicker__day--keyboard-selected {
    background: transparent;
  }
`;
