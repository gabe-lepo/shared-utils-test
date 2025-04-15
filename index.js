export function clamp(floor, ceiling, value) {
  return Math.min(ceiling, Math.max(floor, value))
}
