export const BASE_URL = 'https://www.moddo.kr';

export const ROUTE = {
  login: '/',
  loginSuccess: '/login/success',
  onboarding: '/onboarding',
  home: '/home',
  createBill: '/create-bill',
  selectGroup: '/select-group',
  groupSetup: '/group-setup',
  billDetail: '/bill-detail/:groupToken',
  billDetailCharacterShare: '/bill-detail/:groupToken/character',
} as const;
