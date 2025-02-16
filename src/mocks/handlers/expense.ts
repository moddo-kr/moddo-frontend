import { http, HttpResponse, passthrough } from 'msw';
import { Expense } from '@/pages/createBill/types/expense.type';
import getIsMocked from '@/mocks/utils/getIsMocked';
import { dummyGroupMembers } from './groupMemberHandlers';

const dummyExpenses: Expense[] = [];

interface RequestBody {
  expenses: Expense[];
}

const expenseHandlers = [
  // POST createExpenses
  http.post<object, RequestBody>('/api/v1/expenses', async ({ request }) => {
    if (!getIsMocked(request)) return passthrough();

    const url = new URL(request.url);
    const groupToken = url.searchParams.get('groupToken');

    if (!groupToken) {
      return HttpResponse.json(
        { error: 'groupToken is required' },
        { status: 400 }
      );
    }

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
          // groupmembers에서 id가 memberId와 일치하는 멤버를 찾아 반환 -> 맞나요??
          name:
            dummyGroupMembers.find(
              (member) => member.id === memberExpense.memberId
            )?.name ?? '',
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
    const groupToken = url.searchParams.get('groupToken');

    if (!groupToken) {
      return HttpResponse.json(
        { error: 'groupToken is required' },
        { status: 400 }
      );
    }

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
