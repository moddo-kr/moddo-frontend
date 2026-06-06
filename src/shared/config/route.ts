export const BASE_URL = window.location.origin;

export const ROUTE = {
  login: '/login',
  home: '/',
  myLinks: '/my-links',
  paymentManagement: '/payment-management',
  my: '/my',
  myEdit: '/my/edit',
  createExpense: '/create-expense/:groupToken',
  groupSetup: '/group-setup',
  join: '/join/:groupToken',
  expenseDetail: '/expense-detail/:groupToken',
  editExpenses: '/expense-detail/:groupToken/edit-expenses',
  characterShare: '/expense-detail/:groupToken/character',
} as const;
