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
} as const;
