import React from 'react';
import './experts.scss';
import { Link } from 'react-router-dom';
import Subtitle from '../subtitle/subtitle';

function Experts({experts}) {
  return (
    <section className='experts'>
      <Subtitle>
        <h3><span>Welcome to our</span> online experts</h3>
      </Subtitle>

      <ul className='experts__wrap'>
        {experts.map(({ icon, name, experience }, index) => (
          <li key={`${name}-${index}`}>
            <Link className='experts__item' to='/experts'>
              <img className='experts__img' src={icon} width='70' height='70' alt='Expert' />
              <div className='experts__box'>
                <span className='experts__name'>{name}</span>
                <span className='experts__experience'>{experience} of online experience</span>
              </div>
            </Link>
          </li>             
        ))}
      </ul>            
    </section>
  )
}

export default Experts;
