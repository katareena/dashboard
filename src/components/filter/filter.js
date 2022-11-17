import React, { useState } from 'react';
import './filter.scss';
import cn from 'classnames';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-icon.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter-icon.svg';

function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortingValue, setSortingValue] = useState('All Time');
  const [selected, setSelected] = useState(null);

  return (
    <form className='filter' action='#' method='get'>
      <div className='filter__inner'>        
        <button
          className='filter__filtered'
          type='button'
          aria-label='the filter is active'
          onClick={() => setSortingValue('All Time')}
        >
          {sortingValue !== 'All Time' && <FilterIcon />}            
        </button>

        <button
          className={cn('filter__toggle', {'filter__toggle--open': isOpen})}  
          type='button'
          aria-label='toggle filter'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{sortingValue}</span>
          <ArrowIcon />
        </button>

      </div>

      <ul className={cn('filter__dropdown', {'filter__dropdown--active': isOpen})}>
        {sortingValues.map((sortingValue, index) => (
          <li
            className={cn('filter__option', {'filter__option--active': sortingValue === selected})}
            tabIndex='0'
            key={sortingValue}
            onClick={() => {
              setSortingValue(sortingValue)
              setSelected(index);
              setIsOpen(false);
            }}
          >
            {sortingValue}
          </li>            
          ))
        }
      </ul>
    </form>
  )
}

const sortingValues = ['All Time', 'Lorem', 'Merol'];

export default Filter;