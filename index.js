export const clamp2 = (floor, ceiling, value) => {
  return Math.min(ceiling, Math.max(floor, value))
}
