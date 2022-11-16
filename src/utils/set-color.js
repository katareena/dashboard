import { ChartColor } from '../constants/constants';

export function setColor(index) {
  const colorFirst = ChartColor.First;
  const colorSecond = ChartColor.Second;

  if (index % 2 === 0) {
    return colorFirst;
  }

  return colorSecond;  
};
