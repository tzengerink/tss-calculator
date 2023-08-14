export type Input = {
  targetFitness: number
  numberOfActiveWeeks: number
  numberOfRestWeeks: number
  restWeekFactor: number
}

export type Output = {
  activeWeekTss: number
  restWeekTss: number
}
