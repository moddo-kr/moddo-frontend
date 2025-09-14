/**
 * 지출별 금액을 해당 지출의 참여자 N명에게 분배하는 함수.
 * (첫 번째 사람에게 나머지 금액 추가) // NOTE : MVP에 한해서 임시 방식
 * @param totalAmount 분배할 총 금액
 * @param numberOfMembers 분배할 인원 수
 * @returns 각 인원별 분배 금액 배열, 나머지 금액
 */
const distributeAmount = (
  totalAmount: number,
  numberOfMembers: number
): {
  distributeResult: number[];
  remainder: number;
} => {
  if (numberOfMembers <= 0) return { distributeResult: [0], remainder: 0 };

  const baseAmount = Math.floor(totalAmount / numberOfMembers); // 기본 분배 금액
  const remainder = totalAmount % numberOfMembers; // 나누어 떨어지지 않는 나머지 금액

  // 첫 번째 사람에게 나머지 금액을 추가한다.
  return {
    distributeResult: Array.from({ length: numberOfMembers }, (_, index) =>
      index === 0 ? baseAmount + remainder : baseAmount
    ),
    remainder,
  };
};

export default distributeAmount;
