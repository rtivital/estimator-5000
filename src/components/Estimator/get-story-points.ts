export function getStoryPoints(value: number) {
  if (value < 4) {
    return value;
  }

  if (value < 6) {
    return 5;
  }

  if (value < 10) {
    return 8;
  }

  return 13;
}
