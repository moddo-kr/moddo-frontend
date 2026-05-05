const atomicNumberTokens = {
  2: 2,
  4: 4,
  6: 6,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  28: 28,
  32: 32,
  36: 36,
  40: 40,
  44: 44,
  48: 48,
  52: 52,
  56: 56,
  60: 60,
  72: 72,
  80: 80,
  100: 100,
  200: 200,
} as const;

type AtomicNumberKey = keyof typeof atomicNumberTokens;

export { atomicNumberTokens };
export type { AtomicNumberKey };
