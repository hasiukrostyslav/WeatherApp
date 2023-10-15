export function getCapitalLocation(locationName: string): string {
  return locationName
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
