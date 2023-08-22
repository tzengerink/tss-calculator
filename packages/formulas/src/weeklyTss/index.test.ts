import { weeklyTss } from '.'

describe('weeklyTss', () => {
  it('calculates weekly TSS', () => {
    const output = weeklyTss({
      targetFitness: 80,
      numberOfActiveWeeks: 3,
      numberOfRecoveryWeeks: 1,
      recoveryWeekFactor: 50,
    })
    expect(output.activeWeekTss).toBe(640)
    expect(output.recoveryWeekTss).toBe(320)
  })
})
