import { DAYS } from './data';
import { WeatherDailyData, DailyWeather } from './store/types/types';

export function getCapitalLocation(locationName: string): string {
  return locationName
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function getFormatTime(time: Date): string {
  const hours = time.getHours().toString();
  const minutes = time.getMinutes().toString();

  return `${hours.length > 1 ? hours : '0' + hours}:${
    minutes.length > 1 ? minutes : '0' + minutes
  }`;
}

export function getArrayOfNumbers(array: number[]): number[] {
  return array.slice(1, 8).map((temp: number) => Math.trunc(temp));
}

export function getArrayOfDays(array: string[]) {
  return array
    .slice(1, 8)
    .map((date: string) => new Date(date).getDay())
    .map((num) => DAYS[num as keyof typeof DAYS]);
}

export function formatDailyWeather(data: WeatherDailyData): DailyWeather[] {
  const maxTemp = getArrayOfNumbers(data.temperature_2m_max);
  const minTemp = getArrayOfNumbers(data.temperature_2m_min);
  const days = getArrayOfDays(data.time);
  const code = data.weathercode.slice(1, 8);

  const dailyWeather = Array.from({ length: days.length }).map(() => {
    return {
      day: days.splice(0, 1)[0],
      weatherCode: code.splice(0, 1)[0],
      maxTemperature: maxTemp.splice(0, 1)[0],
      minTemperature: minTemp.splice(0, 1)[0],
    };
  });

  return dailyWeather;
}
