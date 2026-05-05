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
  [K in keyof T & string]: T[K] extends Record<string, unknown> // T[K]가 객체인 경우
    ? `${K}` | `${K}.${FlattenKeys<T[K]>}` // 현재 키를 포함하고, FlattenKeys<T[K]>를 재귀적으로 호출해서 하위 키들을 펼친다
    : `${K}`; // T[K]가 객체가 아닌 경우 키를 그대로 반환
}[keyof T & string]; // 모든 키들을 하나의 타입으로 합친다

/**
 * 재귀적으로 동작하는 유틸리티 타입의 깊이를 제한하기 위한 보조 타입
 * 직접적인 감소 연산을 사용할 수 없어서 배열 인덱스로 깊이를 줄입니다.
 * @example
 * DepthDecrement[3] // 2
 * DepthDecrement[2] // 1
 * DepthDecrement[1] // 0
 */
type DepthDecrement = [never, 0, 1, 2, 3, 4, 5];

/**
 * 객체의 token path를 dot notation으로 반환하는 타입
 *
 * Depth만큼 내려가면 해당 path를 반환합니다.
 * Depth에 도달하기 전에 leaf를 만나면 그 leaf path를 반환합니다.
 * 기본 Depth는 5로, 일반적인 token 객체에서는 leaf path까지 반환하기 위한 재귀 제한 역할을 합니다.
 * @example
 * type Test = {
 *   a: {
 *     b: {
 *       c: string;
 *     };
 *     d: string;
 *   };
 * };
 * type Result = TokenPath<Test>; // 'a.b.c' | 'a.d'
 * type Depth2 = TokenPath<Test, 2>; // 'a.b' | 'a.d'
 */
export type TokenPath<
  T,
  Depth extends number = 5,
  Prefix extends string = '',
> = Depth extends 0
  ? Prefix extends `${infer Path}.`
    ? Path
    : never
  : T extends Record<string | number, unknown>
    ? {
        [K in keyof T]: K extends string | number
          ? T[K] extends Record<string | number, unknown>
            ? TokenPath<T[K], DepthDecrement[Depth], `${Prefix}${K}.`>
            : `${Prefix}${K}`
          : never;
      }[keyof T]
    : never;

/**
 * nested token 객체의 leaf 값 타입을 제한하기 위한 타입
 * 중간 노드는 다시 TokenValueTree이고, leaf 노드는 TValue여야 합니다.
 * @example
 * const tokens = {
 *   fg: {
 *     strong: 'gray.5',
 *   },
 * } as const satisfies TokenValueTree<AtomicColorKey>;
 */
export type TokenValueTree<TValue> = {
  readonly [key: string]: TValue | TokenValueTree<TValue>;
};
