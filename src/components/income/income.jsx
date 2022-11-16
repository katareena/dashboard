import React from 'react';
import './income.scss';
import { translateHeight } from '../../utils/translate-height';
import { setColor } from '../../utils/set-color';

function Income() {
  return (
    <ul className='income__list'>
      {incoms.map(({ value, month }, i) => (
        <li className='income__item' key={`${month}-${i}`}>
          <span
            className='income__col'
            style={{height: `${translateHeight(value)}`,
                    backgroundColor: `${setColor(i)}`}}
          ></span>
          <span className='income__col-label'>{month}</span>
        </li>              
      ))}
    </ul>
  )
}

const incoms = [
  {
    value: 0.30,
    month: 'Jan',
  },
  {
    value: 0.45,
    month: 'Feb',
  },
  {
    value: 0.40,
    month: 'Mar',
  },
  {
    value: 0.20,
    month: 'Apr',
  },
  {
    value: 1.00,
    month: 'May',
  },
  {
    value: 0.25,
    month: 'Jun',
  },
  {
    value: 0.20,
    month: 'Jul',
  },
  {
    value: 0.70,
    month: 'Aug',
  },
  {
    value: 0.35,
    month: 'Sep',
  },
  {
    value: 0.20,
    month: 'Nov',
  },
  {
    value: 0.20,
    month: 'Dec',
  },
  {
    value: 0.20,
    month: 'Jan',
  },
];

export default Income;
