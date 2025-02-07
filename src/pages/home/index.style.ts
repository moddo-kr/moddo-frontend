import styled from 'styled-components';

/** @Todo Button 공통 컴포넌트 제작 */
export const Button = styled.button<{ color?: string; bgColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'black')};
  color: ${({ color }) => (color ? color : 'white')};
  font-weight: 400;
  border-radius: 9999px;
  padding: 0.5rem 0.75rem; // 8px 12px
  height: fit-content;
  width: fit-content;
  line-height: 1.5;
  font-size: 0.875rem; //14px 
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    transition: filter 0.1s;
  }
`;

export const SelectGroupButton = styled(Button)`
  margin-top: 0.5rem; // 8px
  margin-left: 1.25rem; // 20px
  font-weight: 600;
`;

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem; // 20px
  width: 100%;
  background-color: #FAF6F3;
`;

export const MainText = styled.h2`
  font-size: 1.25rem; // 20px
  font-weight: 700;
  line-height: 1.5;
`;

export const SubText = styled.p`
  font-size: 1rem; // 16px
  font-weight: 400;
  white-space: pre-wrap;
  line-height: 1.5;
`;

export const DescriptionImg = styled.img`
  width: 10.75rem; // 172px; 
  object-fit: contain;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Hr = styled.hr`
  border: 0.5rem solid #EDEEEE;
  width: 100%;
`;

export const SettlementTitle = styled.h2`
  font-size: 1.25rem; // 20px
  font-weight: 700;
  padding: 0.5rem 1.25rem; // 8px 20px
  white-space: nowrap;
`;

export const SettlementButton = styled(Button)<{selected?: boolean}>`
  background-color: ${({ selected }) => (selected ? '#FF802E' : '#F1F3F5')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
`;

export const NoSettlementImg = styled.img`
  width: 33vw;
  max-width: 200px;
  object-fit: contain;
`;

