export const takeUniqueOrThrow = <T extends any[]>(values: T): T[number] => {
  if (values.length > 1) throw new Error("Multi-item return");
  if (values.length === 0) return null;
  return values[0];
}