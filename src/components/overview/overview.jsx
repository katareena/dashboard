import React from 'react';
import './overview.scss';
import Filter from '../filter/filter';
import Subtitle from '../subtitle/subtitle';

function Overview() {
  return (
    <section className='overview'>
      <Subtitle>
        <h3>Overview</h3>
        <Filter />
      </Subtitle>

      <div className='overview__wrap'>
        <div className='overview__box overview__box--left'>
          <div className='overview__description'>
            <span className='overview__title'>Customers</span>
            <span className='overview__percents'>8%</span>
          </div>
          <span className='overview__numbers'>17.578</span>
        </div>

        <div className='overview__box overview__box--right'>
          <div className='overview__description'>
            <span className='overview__title'>Incoms</span>
            <span className='overview__percents'>3%</span>
          </div>
          <span className='overview__numbers'>$45,737,000</span>
        </div>
      </div>            
    </section>
  )
}

export default Overview;
