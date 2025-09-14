import { http, HttpResponse, passthrough } from 'msw';
import {
  Expense,
  ExpenseForm,
  SingleExpenseForm,
} from '@/domains/expense/model/expense.type';
import getIsMocked from '@/mocks/lib/getIsMocked';
import { dummyGroupMembers } from './groupMember';

const dummyExpenseDetail = [
  {
    id: 1,
    date: new Date('2025-02-03'),
    content: '하이디라오',
    totalAmount: 100000,
    groupMembers: ['김모또(총무)', '김반숙'],
  },
  {
    id: 2,
    date: new Date('2025-02-03'),
    content: '카페',
    totalAmount: 22000,
    groupMembers: ['김모또(총무)', '김반숙'],
  },
  {
    id: 3,
    date: new Date('2025-02-04'),
    content: '향수공방',
    totalAmount: 210000,
    groupMembers: ['김모또(총무)', '김반숙', '정에그'],
  },
  {
    id: 4,
    date: new Date('2025-02-04'),
    content: '간술',
    totalAmount: 36000,
    groupMembers: ['김모또(총무)', '김반숙', '정에그'],
  },
];

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
          id: memberExpense.id,
          // groupmembers에서 id가 일치하는 멤버를 찾아 반환
          name:
            dummyGroupMembers.find((member) => member.id === memberExpense.id)
              ?.name ?? '',
          amount: memberExpense.amount,
          role:
            dummyGroupMembers.find((member) => member.id === memberExpense.id)
              ?.role ?? 'PARTICIPANT',
          profile:
            dummyGroupMembers.find((member) => member.id === memberExpense.id)
              ?.profile ?? '',
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
          id: memberExpense.id,
          name:
            dummyGroupMembers.find((member) => member.id === memberExpense.id)
              ?.name ?? '',
          amount: memberExpense.amount,
          role:
            dummyGroupMembers.find((member) => member.id === memberExpense.id)
              ?.role ?? 'PARTICIPANT',
          profile:
            dummyGroupMembers.find((member) => member.id === memberExpense.id)
              ?.profile ?? '',
        })),
      };

      return HttpResponse.json({ message: 'success' });
    }
  ),

  // GET getExpenseDetailsByGroupId
  http.get('/api/v1/expenses/details', ({ request }) => {
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
      expenses: dummyExpenseDetail,
    });
  }),
];

export default expenseHandlers;
