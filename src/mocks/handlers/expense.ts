import { http, HttpResponse, passthrough } from 'msw';
import {
  Expense,
  ExpenseForm,
  SingleExpenseForm,
} from '@/pages/createBill/types/expense.type2';
import getIsMocked from '@/mocks/utils/getIsMocked';
import { dummyGroupMembers } from './groupMember';

const dummyExpenses: Expense[] = [];

interface UpdateExpenseParams {
  expenseId: string;
}

const expenseHandlers = [
  // POST createExpenses
  http.post<object, ExpenseForm>('/api/v1/expenses', async ({ request }) => {
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
          id: memberExpense.memberId,
          // groupmembers에서 id가 memberId와 일치하는 멤버를 찾아 반환
          name:
            dummyGroupMembers.find(
              (member) => member.id === memberExpense.memberId
            )?.name ?? '',
          amount: memberExpense.amount,
          role:
            dummyGroupMembers.find(
              (member) => member.id === memberExpense.memberId
            )?.role ?? 'PARTICIPANT',
          profile:
            dummyGroupMembers.find(
              (member) => member.id === memberExpense.memberId
            )?.profile ?? '',
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

  // PUT updateExpense
  http.put<UpdateExpenseParams, SingleExpenseForm>(
    '/api/v1/expenses/:expenseId',
    async ({ request, params }) => {
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

      const body = await request.json();
      const { amount, content, date, memberExpenses } = body;

      const index = dummyExpenses.findIndex(
        (expense) => expense.id === Number(expenseId)
      );

      if (index === -1) {
        return HttpResponse.json(
          { error: 'expense not found' },
          { status: 404 }
        );
      }

      dummyExpenses[index] = {
        id: dummyExpenses[index].id,
        amount,
        content,
        date,
        memberExpenses: memberExpenses.map((memberExpense) => ({
          id: memberExpense.memberId,
          name:
            dummyGroupMembers.find(
              (member) => member.id === memberExpense.memberId
            )?.name ?? '',
          amount: memberExpense.amount,
          role:
            dummyGroupMembers.find(
              (member) => member.id === memberExpense.memberId
            )?.role ?? 'PARTICIPANT',
          profile:
            dummyGroupMembers.find(
              (member) => member.id === memberExpense.memberId
            )?.profile ?? '',
        })),
      };

      return HttpResponse.json({ message: 'success' });
    }
  ),
];

export default expenseHandlers;
