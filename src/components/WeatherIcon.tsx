import ClearSkyIcon from '../assets/clear-sky.svg?react';
import ClearNightIcon from '../assets/clear-night.svg?react';
import PartlyCloudyIcon from '../assets/partly-cloudy.svg?react';
import OvercastIcon from '../assets/overcast.svg?react';
import OvercastNightIcon from '../assets/overcast-night.svg?react';
import FreezingIcon from '../assets/freezing-drizzle.svg?react';
import SnowIcon from '../assets/snow.svg?react';
import ThunderstormIcon from '../assets/thunderstorm.svg?react';
import ThunderstormHeavyIcon from '../assets/thunderstorm-heavy.svg?react';
import RainShowerIcon from '../assets/rain-shower.svg?react';
import RainIcon from '../assets/rain.svg?react';
import RainNightIcon from '../assets/rain-night.svg?react';
import DrizzleIcon from '../assets/drizzle.svg?react';
import FogIcon from '../assets/fog.svg?react';

type WeatherIconProps = {
  code: number;
};

function WeatherIcon({ code }: WeatherIconProps) {
  let Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  switch (code) {
    case 0:
      Icon = ClearSkyIcon;
      break;

    case 100:
      Icon = ClearNightIcon;
      break;

    case 1:
    case 2:
      Icon = PartlyCloudyIcon;
      break;

    case 3:
      Icon = OvercastIcon;
      break;

    case 101:
      Icon = OvercastNightIcon;
      break;

    case 45:
      Icon = FogIcon;
      break;

    case 48:
    case 56:
    case 57:
    case 66:
    case 67:
      Icon = FreezingIcon;
      break;

    case 51:
    case 53:
    case 55:
      Icon = DrizzleIcon;
      break;

    case 61:
    case 63:
    case 65:
      Icon = RainIcon;
      break;

    case 80:
    case 81:
    case 82:
      Icon = RainShowerIcon;
      break;

    case 102:
      Icon = RainNightIcon;
      break;

    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      Icon = SnowIcon;
      break;

    case 95:
      Icon = ThunderstormIcon;
      break;

    case 96:
    case 99:
      Icon = ThunderstormHeavyIcon;
      break;

    default:
      Icon = ClearSkyIcon;
  }
  return <Icon style={{ width: '100px', height: '100px' }} />;
}

export default WeatherIcon;
