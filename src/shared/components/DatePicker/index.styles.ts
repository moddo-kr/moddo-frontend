import styled from 'styled-components';
import { TextVariant } from '@/shared/components/Text/index.styles';

export const DatePickerWrapper = styled.div`
  width: 100%;
  // input 컴포넌트를 포함한 전체 영역
  .react-datepicker-wrapper {
    width: 100%;
  }

  // 달력 팝업 영역
  .react-datepicker-popper {
    /* width: 100%; */
    .react-datepicker__month-container {
      width: 100%;
    }
    .react-datepicker__month {
      margin: ${({ theme }) => `${theme.unit[8]} 0`};
    }
  }

  // 달력 전체 영역
  .react-datepicker {
    min-width: 19.375rem;
    padding-top: ${({ theme }) => theme.unit[8]};
    border-radius: ${({ theme }) => theme.radius.default};
    border: ${({ theme }) =>
      `1px solid ${theme.color.semantic.border.default}`};
    background: ${({ theme }) =>
      theme.color.semantic.background.normal.default};
    box-shadow: 3px 4px 7.5px 0px rgba(0, 0, 0, 0.09);
  }

  // 달력 헤더 영역 (요일 포함)
  .react-datepicker__header {
    background: transparent;
    border-bottom: none;
  }

  // 요일 표시 영역
  .react-datepicker__day-names {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    place-items: center;
    height: ${({ theme }) => theme.unit[24]};
    padding: ${({ theme }) => `0rem ${theme.unit[16]}`};
    margin-top: ${({ theme }) => theme.unit[8]};
    // 각 요일
    .react-datepicker__day-name {
      ${TextVariant('body2R')}
      font-size: 0.9375rem;
      color: ${({ theme }) => theme.color.semantic.text.default};
      width: 100%;
      margin: 0;
    }
  }

  /* 날짜 영역 스타일링 */
  // 주
  .react-datepicker__week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    place-items: center;
    height: ${({ theme }) => theme.unit[44]};
    padding: ${({ theme }) => `0rem ${theme.unit[16]}`};
  }
  // 개별 날짜
  .react-datepicker__day {
    display: flex;
    align-items: center;
    justify-content: center;
    ${TextVariant('body2R')}
    width: 100%;
    aspect-ratio: 1/1;
    padding: 0;
    margin: 0;
    border-radius: ${({ theme }) => theme.radius.circle} !important;
    opacity: 0.8;
    &:hover {
      background-color: transparent;
    }
    .react-datepicker__day--today {
      background-color: transparent;
      opacity: 1;
    }
  }
  // 선택된 날짜
  .react-datepicker__day--selected {
    color: ${({ theme }) => theme.color.semantic.text.inverse};
    background: ${({ theme }) => theme.color.semantic.orange.default};
    opacity: 1;
    &:hover {
      background: ${({ theme }) => theme.color.semantic.orange.default};
      color: ${({ theme }) => theme.color.semantic.text.strong};
    }
  }
  // 해당 월이 아닌 날짜
  .react-datepicker__day--outside-month {
    color: ${({ theme }) => theme.color.semantic.text.disabled};
  }

  // 기타 사용하지 않는 기능에 대한 스타일 제거
  .react-datepicker__day--keyboard-selected {
    background-color: transparent;
  }
`;

// 헤더 - 이전 달, 다음 달 버튼, 현재 년월 표시
export const Header = styled.div`
  display: flex;
  padding: ${({ theme }) => `${theme.unit[2]} ${theme.unit[24]}`};
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.unit[8]};
  align-self: stretch;
`;
