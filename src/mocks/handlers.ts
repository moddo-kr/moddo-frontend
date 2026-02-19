import authHandlers from './handlers/auth';
import expenseHandlers from './handlers/expense';
import groupHandlers from './handlers/group';
import groupMemberHandlers from './handlers/groupMember';
import characterHandlers from './handlers/character';

export const handlers = [
  ...expenseHandlers,
  ...authHandlers,
  ...groupHandlers,
  ...groupMemberHandlers,
  ...characterHandlers,
];
