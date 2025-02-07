import { describe, expect, it } from 'vitest';
import numPadController from './numPadController';

describe('addDigit', () => {
  it.each([
    {
      value: 0,
      digit: 5,
      expected: 5,
    },
    {
      value: 5,
      digit: 6,
      expected: 56,
    },
    {
      value: 56,
      digit: 7,
      expected: 567,
    },
  ])('($value, $digit) => $expected', ({ value, digit, expected }) => {
    expect(numPadController.addDigit(value, digit)).toBe(expected);
  });
});

describe('deleteDigit', () => {
  it.each([
    {
      value: 0,
      expected: 0,
    },
    {
      value: 5,
      expected: 0,
    },
    {
      value: 56,
      expected: 5,
    },
    {
      value: 567,
      expected: 56,
    },
  ])('($value) => $expected', ({ value, expected }) => {
    expect(numPadController.deleteDigit(value)).toBe(expected);
  });
});

describe('applyShortcut', () => {
  it.each([
    {
      value: 0,
      shortcutValue: 10_000,
      expected: 10_000,
    },
    {
      value: 12_345,
      shortcutValue: 50_000,
      expected: 62_345,
    },
    {
      value: 60_000,
      shortcutValue: 100_000,
      expected: 160_000,
    },
  ])(
    '($value, $shortcutValue) => $expected',
    ({ value, shortcutValue, expected }) => {
      expect(numPadController.applyShortcut(value, shortcutValue)).toBe(
        expected
      );
    }
  );
});

it('clearAll', () => {
  expect(numPadController.clearAll()).toBe(0);
});
