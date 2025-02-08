import * as z from 'zod';

const ExpenseMemberSchema = z.object({
  memberId: z.number().int().positive(), // 회원 고유번호
  amount: z.number().int().positive(), // 회원별 정산 금액
  name: z.string(), // 회원 이름
});

const ExpenseSchema = z.object({
  amount: z.number(), // 결제 금액
  content: z.string(), // 지출 장소 및 내용
  date: z.date(), // 지출일
  memberExpenses: z.array(ExpenseMemberSchema), // 참여자
});

export const ExpenseFormSchema = z.object({
  expenses: z.array(ExpenseSchema),
});

export interface ExpenseMember extends z.infer<typeof ExpenseMemberSchema> {}

export interface Expense extends z.infer<typeof ExpenseSchema> {
  id: number;
  memberExpenses: ExpenseMember[];
}

// NOTE : API 스펙 미정이므로 임시 타입
export interface ExpenseList {
  expenses: Expense[];
}
