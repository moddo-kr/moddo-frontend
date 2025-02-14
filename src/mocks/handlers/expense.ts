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

    const url = new URL(request.url);
    const meedId = url.searchParams.get('meetId');

    if (!meedId) return new HttpResponse(null, { status: 404 });

    return HttpResponse.json({
      expenses: dummyExpenses,
    });
  }),
];

export default expenseHandlers;
