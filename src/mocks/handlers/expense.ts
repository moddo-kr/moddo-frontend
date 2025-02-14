import { http, HttpResponse, passthrough } from 'msw';
import getIsMocked from '@/mocks/utils/getIsMocked';
import { dummyGroupMembers } from './groupMember';

const dummyExpenses = [];

const expenseHandlers = [
  // POST createExpenses
  http.post('/api/v1/expenses', async ({ request }) => {
    if (!getIsMocked(request)) return passthrough();

    const body = await request.json();
    const { expenses } = body;

    expenses.forEach((expense) => {
      dummyExpenses.push({
        id: dummyExpenses.length + 1,
        amount: expense.amount,
        content: expense.content,
        date: expense.date,
        memberExpenses: expense.memberExpenses.map((memberExpense) => ({
          memberId: memberExpense.memberId,
          name: dummyGroupMembers.get(memberExpense.memberId)?.name ?? '',
          amount: memberExpense.amount,
        })),
      });
    });

    return HttpResponse.json({
      expenses: dummyExpenses,
    });
  }),

  // GET getAllExpense
  http.get('/api/v1/expenses', ({ request }) => {
    if (!getIsMocked(request)) return passthrough();

    return HttpResponse.json({
      expenses: dummyExpenses,
    });
  }),

  // DELETE deleteByExpenseId
  http.delete('/api/v1/expenses/:expenseId', ({ request, params }) => {
    if (!getIsMocked(request)) return passthrough();

    const { expenseId } = params;
    const url = new URL(request.url);
    const groupToken = url.searchParams.get('groupToken');

    if (!groupToken) {
      return HttpResponse.json(
        { error: 'groupToken is required' },
        { status: 400 }
      );
    }

    const index = dummyExpenses.findIndex(
      (expense) => expense.id === Number(expenseId)
    );

    if (index === -1) {
      return HttpResponse.json({ error: 'expense not found' }, { status: 404 });
    }

    dummyExpenses.splice(index, 1);

    return HttpResponse.json({ message: 'success' });
  }),
];

export default expenseHandlers;
