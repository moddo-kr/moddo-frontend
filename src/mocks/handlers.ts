import expenseHandlers from './handlers/expense';
import groupHandlers from './handlers/group';

export const handlers = [...expenseHandlers, ...groupHandlers];
