const idCounter = new Map<string, number>();


export const generateUniqueId = (prefix: string): string => {
  const prev = idCounter.get(prefix);
  const next = prev !== undefined
    ? prev + 1
    : 0

  idCounter.set(prefix, next);
  return `${prefix}-${next}`
}
