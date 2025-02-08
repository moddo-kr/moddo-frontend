export const dummyData = {
  group: {
    name: '계란 모임',
    password: '1234',
  },
  members: [
    {
      name: '김반숙',
    },
    {
      name: '박완숙',
    },
    {
      name: '정에그',
    },
  ],
  expenses: [
    {
      amount: 120_000,
      content: '하이디라오',
      date: '2025-02-03',
      memberExpenses: [
        {
          memberId: 1,
          name: '김반숙',
          amount: 40_000,
        },
        {
          memberId: 2,
          name: '박완숙',
          amount: 40_000,
        },
        {
          memberId: 3,
          name: '정에그',
          amount: 40_000,
        },
      ],
    },
  ],
  account: {
    bank: '카카오',
    accountNumber: '1234-1234-1234',
  },
};
