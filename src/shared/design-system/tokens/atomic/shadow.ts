const atomicShadowTokens = {
  shadow1: {
    color: '#00000014',
    type: 'dropShadow',
    x: 0,
    y: 2,
    blur: 4,
    spread: 0,
  },
  shadow2: {
    color: '#0000001f',
    type: 'dropShadow',
    x: 0,
    y: 4,
    blur: 8,
    spread: 0,
  },
  shadow3: {
    color: '#00000029',
    type: 'dropShadow',
    x: 0,
    y: 8,
    blur: 10,
    spread: 0,
  },
} as const;

type AtomicShadowKey = keyof typeof atomicShadowTokens;

export { atomicShadowTokens };
export type { AtomicShadowKey };
