export const BASE_URL = 'https://www.moddo.kr';

export const ROUTE = {
  login: '/login',
  home: '/',
  myLinks: '/my-links',
  paymentManagement: '/payment-management',
  my: '/my',
  myEdit: '/my/edit',
  createExpense: '/create-expense/:groupToken',
  selectGroup: '/select-group',
  groupSetup: '/group-setup',
  join: '/join/:groupToken',
  expenseDetail: '/expense-detail/:groupToken',
  characterShare: '/expense-detail/:groupToken/character',
} as const;
