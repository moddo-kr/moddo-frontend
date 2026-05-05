import {
  atomicColorTokens,
  atomicNumberTokens,
  type AtomicColorKey,
  type AtomicNumberKey,
} from '../tokens/atomic';

export function resolveAtomicColor(key: AtomicColorKey): string {
  return atomicColorTokens[key];
}

export function resolveAtomicNumber(key: AtomicNumberKey): string {
  return `${atomicNumberTokens[key]}px`;
}
