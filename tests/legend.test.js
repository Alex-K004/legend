import { healthStatus } from '../src/legend'

describe('healthStatus', () => {
  test('health > 50', () => {
    expect(healthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test('health between 15 and 50', () => {
    expect(healthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
  });

  test('health < 15', () => {
    expect(healthStatus({ name: 'Маг', health: 14 })).toBe('critical');
  });
  });