import { describe, expect } from '@jest/globals';
import data, { sortArray } from '../game';

const can2 = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

describe('Проверка фенкции сортировки героеев', () => {
  test('have all the same properties', () => {
    expect(sortArray(data)).toEqual(can2);
  });
  test('are not the exact same can', () => {
    expect(sortArray(data)).not.toBe(can2);
  });
});
