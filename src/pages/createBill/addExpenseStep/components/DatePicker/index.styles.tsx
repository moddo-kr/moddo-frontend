import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  width: 100%;
  // input 컴포넌트를 포함한 전체 영역
  .react-datepicker-wrapper {
    width: 100%;
  }

  // 달력 팝업 영역
  .react-datepicker-popper {
    width: 19.375rem;
    .react-datepicker__month-container {
      width: 100%;
    }
  }

  // 달력 전체 영역
  .react-datepicker {
    border-radius: 0.75rem;
    border: 1px solid var(--border-default, #d2d4d5);
    background: #fff;
    box-shadow: 3px 4px 7.5px 0px rgba(0, 0, 0, 0.09);
    width: 100%;
    flex: 1;
  }

  // 달력 헤더 영역 (요일 포함)
  .react-datepicker__header {
    background: #fff;
    border-bottom: none;
  }

  // 요일 표시 영역
  .react-datepicker__day-names {
    display: flex;
    height: 1.5rem;
    margin-top: 0.5rem;
    justify-content: space-between;
    align-items: center;
    // 각 요일
    .react-datepicker__day-name {
      color: #1e2124;
      font-size: 0.9375rem;
      font-weight: 400;
      line-height: 150%; /* 1.40625rem */
      width: 2.75rem;
    }
  }

  /* 날짜 영역 스타일링 */
  // 주
  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.75rem;
  }
  // 개별 날짜
  .react-datepicker__day {
    display: flex;
    width: 2.75rem;
    height: 2.75rem;
    justify-content: center;
    align-items: center;
    margin: 0;
    border-radius: 62.5rem;
    color: #1e2124;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 150%; /* 1.3125rem */
    letter-spacing: 0rem;
    // 오늘 날짜
    .react-datepicker__day--today {
      background-color: transparent;
    }
  }
  // 선택된 날짜
  .react-datepicker__day--selected {
    color: #fff;
    background: #ff802e;
  }
  // 해당 월이 아닌 날짜
  .react-datepicker__day--outside-month {
    color: #8a949e;
  }
`;

// 헤더 - 이전 달, 다음 달 버튼, 현재 년월 표시
export const Header = styled.div`
  display: flex;
  padding: 0.125rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  height: 2.5rem;
`;

export const Arrow = styled.button`
  color: #444950;
`;

export const HeaderDate = styled.span`
  color: #1e2124;
  font-size: 1rem;
  font-weight: 600;
  line-height: 150%; /* 1.5rem */
`;
