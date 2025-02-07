import styled from 'styled-components';

export const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 1.75rem 1.375rem; // 28px 22px
  width: 100%;
  min-width: 320px;
  max-height: 64px;
  height: 100%;
`;

export const LeftHeaderArea = styled(HeaderArea)`
  gap: 1rem;
`;

export const CenterHeaderArea = styled(HeaderArea)`
  justify-content: space-between;
`;

export const TitleArea = styled.h2`
  all: unset;
  font-size: 1.25rem; // 20px
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
`;

export const CenterTitleArea = styled(TitleArea)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const IconWrapper = styled.button`
  all: unset;
  /* width: 0.5rem; // 8px
  height: 1rem; // 16px */
  width: fit-content;
  height: fit-content;
  cursor: pointer;
`;

export const DummyIcon = styled.div`
  width: 1.5rem; // 24px
  height: 1.5rem; // 24px
  visibility: hidden;
`;
