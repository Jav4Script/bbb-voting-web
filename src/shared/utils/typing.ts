export const isBlobUrl = (value: string): boolean => {
  return value.startsWith('blob:')
}
