export const BASE_URL = 'https://moddo.kr';

export const ROUTE = {
  login: '/',
  loginSuccess: '/login/success',
  home: '/home',
  createBill: '/create-bill',
  selectGroup: '/selectGroup',
  groupSetupName: '/groupSetup/groupName',
  groupSetupPassword: '/groupSetup/password',
  groupSetupMember: '/groupSetup/member',
  billDetail: '/bill-detail/:groupToken',
  billDetailCharacterShare: '/bill-detail/:groupToken/character',
} as const;
