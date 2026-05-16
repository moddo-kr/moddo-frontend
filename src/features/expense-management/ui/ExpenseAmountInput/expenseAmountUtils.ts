export const MIN_EXPENSE_AMOUNT = 0;
export const MAX_EXPENSE_AMOUNT = 5_000_000;

export function appendDigit(amount: number, digit: number) {
  if (digit < 0 || digit > 9) return amount;

  const newAmount = amount * 10 + digit;
  return newAmount > MAX_EXPENSE_AMOUNT ? MAX_EXPENSE_AMOUNT : newAmount;
}

export function deleteLastDigit(amount: number) {
  return Math.floor(amount / 10);
}

export function addToAmount(amount: number, increment: number) {
  const newAmount = amount + increment;
  return newAmount > MAX_EXPENSE_AMOUNT ? MAX_EXPENSE_AMOUNT : newAmount;
}

export function clearAmount() {
  return MIN_EXPENSE_AMOUNT;
}

export function formatAmount(value: number) {
  return value.toLocaleString('ko-KR');
}
