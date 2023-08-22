import { DAYS_IN_A_WEEK } from '../constants'

export type WeeklyTssInput = {
  targetFitness: number
  numberOfActiveWeeks: number
  numberOfRecoveryWeeks: number
  recoveryWeekFactor: number
}

export type WeeklyTssOutput = {
  activeWeekTss: number
  recoveryWeekTss: number
}

export const weeklyTss = ({
  targetFitness,
  numberOfActiveWeeks,
  numberOfRecoveryWeeks,
  recoveryWeekFactor,
}: WeeklyTssInput): WeeklyTssOutput => {
  const numberOfWeeks = numberOfActiveWeeks + numberOfRecoveryWeeks
  const activeWeekRatio = numberOfWeeks * numberOfActiveWeeks * 1
  const recoveryWeekRatio = numberOfWeeks * numberOfRecoveryWeeks * (recoveryWeekFactor / 100)
  const totalLoad = DAYS_IN_A_WEEK * numberOfWeeks * targetFitness
  const loadQuotient = totalLoad / (activeWeekRatio + recoveryWeekRatio)

  return {
    activeWeekTss: (loadQuotient * activeWeekRatio) / numberOfActiveWeeks,
    recoveryWeekTss: (loadQuotient * recoveryWeekRatio) / numberOfRecoveryWeeks,
  }
}
