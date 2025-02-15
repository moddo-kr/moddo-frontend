import authHandlers from './handlers/auth';
import expenseHandlers from './handlers/expense';
import groupHandlers from './handlers/group';

export const handlers = [...expenseHandlers, ...authHandlers, ...groupHandlers];
