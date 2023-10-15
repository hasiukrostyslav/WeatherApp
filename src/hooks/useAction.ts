import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as WeatherActionCreator from '../store/action-creators/weather';

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(WeatherActionCreator, dispatch);
};
