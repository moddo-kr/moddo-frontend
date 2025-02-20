import { MemberRole, memberRole } from '@/common/types/member.type';
import * as z from 'zod';

/** 지출 폼의 참여자 */
export const ExpenseFormMemberSchema = z.object({
  memberId: z.number(), // 회원 고유번호
  amount: z.number().int(), // 회원별 정산 금액
  name: z.string(), // 회원 이름 (요청엔 포함되지 않음)
  profile: z.string().optional(), // 회원 프로필 (요청엔 포함되지 않음)
  role: z.enum(memberRole), // 회원 역할 (요청엔 포함되지 않음)
});

/** 지출 폼의 참여자 타입 */
export type ExpenseFormMember = z.infer<typeof ExpenseFormMemberSchema>;

/** 단건 지출 입력 폼 */
export const SingleExpenseFormSchema = z.object({
  amount: z.number().int().positive(), // 결제 금액
  content: z.string().min(1), // 지출 장소 및 내용
  date: z.string().date(), // 지출일
  memberExpenses: z.array(ExpenseFormMemberSchema).min(1), // 참여자 배열
});

/** 단건 지출 입력 폼 타입 */
export type SingleExpenseForm = z.infer<typeof SingleExpenseFormSchema>;

/** 지출 입력 폼 */
export const ExpenseFormSchema = z.object({
  expenses: z.array(SingleExpenseFormSchema),
});

/** 지출 입력 폼 타입 */
export type ExpenseForm = z.infer<typeof ExpenseFormSchema>;

/** 지출 타입 */
export interface Expense {
  id: number;
  amount: number;
  content: string;
  date: string;
  memberExpenses: {
    id: number; // 회원 고유번호 (폼과 다른 점은 memberId가 id로 변경되었다는 것)
    role: MemberRole; // 회원 역할 (폼에는 없음)
    name: string;
    amount: number;
    profile: string;
  }[];
}

/** 지출 리스트 타입 (지출 전체 조회) */
export interface ExpenseList {
  expenses: Expense[];
}

/* 지출별 남은 금액 데이터 타입 */
export interface RemainderData {
  name: string;
  remainder: number;
}

/* 받을 정산 페이지 - 지출 조회 타입 */
export interface ExpenseDetail {
  id: number;
  date: Date;
  content: string;
  totalAmount: number;
  groupMembers: string[];
}

export interface ExpenseDetailList {
  expenses: ExpenseDetail[];
}
