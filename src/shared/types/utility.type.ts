/**
 * 객체의 키를 펼쳐서 반환하는 타입
 * @example
 * type Test = {
 *   a: {
 *     b: {
 *       c: string;
 *     };
 *     d: string;
 *   };
 * };
 * type Result = FlattenKeys<Test>; // 'a' | 'a.b' | 'a.b.c' | 'a.d'
 */
export type FlattenKeys<T> = {
  // K는 T의 키들 중 문자열인 것 (keyof T & string)
  [K in keyof T & string]: T[K] extends Record<string, any> // T[K]가 객체인 경우
    ? `${K}` | `${K}.${FlattenKeys<T[K]>}` // 현재 키를 포함하고, FlattenKeys<T[K]>를 재귀적으로 호출해서 하위 키들을 펼친다
    : `${K}`; // T[K]가 객체가 아닌 경우 키를 그대로 반환
}[keyof T & string]; // 모든 키들을 하나의 타입으로 합친다
