import React from 'react';
import { useWindowSize } from '../../hooks/use-window-size';
import './income.scss';
import { translateHeight } from '../../utils/translate-height';
import { setColor } from '../../utils/set-color';
import Filter from '../filter/filter';
import Subtitle from '../subtitle/subtitle';

function Income({incomes}) {
  const [width, ] = useWindowSize();
  const customIncomes = width < 576 ? incomes.slice(0, 6) : incomes;

  return (
    <>
      <Subtitle>
        <h3>Total Income</h3>
        <Filter />
      </Subtitle>

      <div className='income__box'>
        <ul className='income__list'>
          {customIncomes.map(({ value, month }, i) => (
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
      </div> 
    </> 
  )
}

export default Income;
