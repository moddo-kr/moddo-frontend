import { describe, expect, it } from 'vitest';
import distributeAmount from './distributeExpense';

describe('지출별 금액 분배 (distributeAmount)', () => {
  it.each([
    {
      totalAmount: 10000,
      numberOfMembers: 2,
      expected: {
        distributeResult: [5000, 5000],
        remainder: 0,
      },
    },
    {
      totalAmount: 9999,
      numberOfMembers: 3,
      expected: {
        distributeResult: [3333, 3333, 3333],
        remainder: 0,
      },
    },
  ])(
    '총 금액이 인원수로 나누어 떨어지면 각 인원별 금액이 같다.',
    ({ totalAmount, numberOfMembers, expected }) => {
      expect(distributeAmount(totalAmount, numberOfMembers)).toEqual(expected);
    }
  );

  it('총 금액이 인원수로 나누어 떨어지지 않으면 첫 번째 사람에게 나머지 금액이 추가된다.', () => {
    expect(distributeAmount(9999, 2)).toEqual({
      distributeResult: [5000, 4999],
      remainder: 1,
    });
  });

  it.each([
    {
      totalAmount: 10000,
      numberOfMembers: 0,
      expected: {
        distributeResult: [0],
        remainder: 0,
      },
    },
    {
      totalAmount: 10000,
      numberOfMembers: -1,
      expected: {
        distributeResult: [0],
        remainder: 0,
      },
    },
  ])(
    `인원수가 0 이하이면 [0]을 반환한다.`,
    ({ totalAmount, numberOfMembers, expected }) => {
      expect(distributeAmount(totalAmount, numberOfMembers)).toEqual(expected);
    }
  );

  it('한 명에게 분배하는 경우', () => {
    expect(distributeAmount(10000, 1)).toEqual({
      distributeResult: [10000],
      remainder: 0,
    });
  });

  it('총 금액이 0인 경우.', () => {
    expect(distributeAmount(0, 3)).toEqual({
      distributeResult: [0, 0, 0],
      remainder: 0,
    });
  });
});
