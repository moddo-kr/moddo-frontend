export const BASE_URL = 'https://www.moddo.kr';

export const ROUTE = {
  login: '/login',
  onboarding: '/onboarding',
  home: '/',
  createBill: '/create-bill',
  selectGroup: '/select-group',
  groupSetup: '/group-setup',
  billDetail: '/bill-detail/:groupToken',
  billDetailCharacterShare: '/bill-detail/:groupToken/character',
} as const;
