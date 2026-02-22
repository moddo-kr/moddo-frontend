export const BASE_URL = 'https://www.moddo.kr';

export const ROUTE = {
  login: '/login',
  home: '/',
  myLinks: '/my-links',
  my: '/my',
  myEdit: '/my/edit',
  createExpense: '/create-expense/:groupToken',
  selectGroup: '/select-group',
  groupSetup: '/group-setup',
  expenseDetail: '/expense-detail/:groupToken',
  characterShare: '/expense-detail/:groupToken/character',
} as const;
