import { describe, test } from 'node:test'
import assert from 'node:assert';

describe('calculateDamage', () => {
  test('should return 0 when damage is 0', () => {
    const damageOutput = calculateDamage(0, 0);

    assert.strictEqual(damageOutput, 0);
  })

  test('should return attack minus defense', () => {
    const damageOutput = calculateDamage(10, 5);

    assert.strictEqual(damageOutput, 5);
  })

  test('should return 0 as minimum damage', () => {
    const damageOutput = calculateDamage(10, 15);

    assert.strictEqual(damageOutput, 0);
  })
})

function calculateDamage(attack: number, defense: number) {
  return Math.max(attack - defense, 0);
}
