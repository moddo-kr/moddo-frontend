export const BASE_URL = 'https://www.moddo.kr';

export const ROUTE = {
  login: '/login',
  onboarding: '/onboarding',
  home: '/',
  createExpense: '/create-expense',
  selectGroup: '/select-group',
  groupSetup: '/group-setup',
  expenseDetail: '/expense-detail/:groupToken',
  characterShare: '/expense-detail/:groupToken/character',
} as const;
