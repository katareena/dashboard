import React from 'react';
import './experts.scss';
import Subtitle from '../subtitle/subtitle';
import expertOne from '../../assets/expert-1.jpg';
import expertTwo from '../../assets/expert-2.jpg';
import expertThree from '../../assets/expert-3.jpg';

function Experts() {
  return (
    <section className='experts'>
      <Subtitle>
        <h3><span>Welcome to our</span> online experts</h3>
      </Subtitle>

      <ul className='experts__wrap'>
        {experts.map(({ icon, name, experience }, index) => (
          <li className='experts__item' key={`${name}-${index}`}>
            <img className='experts__img' src={icon} width='70' height='70' alt='Expert' />
            <div className='experts__box'>
              <span className='experts__name'>{name}</span>
              <span className='experts__experience'>{experience} of online experience</span>
            </div>
          </li>             
        ))}
      </ul>            
    </section>
  )
}

const experts = [
  {
    icon: expertOne,
    name: 'Andrew L.',
    experience: '2 years',
  },
  {
    icon: expertTwo,
    name: 'Ray E.',
    experience: '1 year',
  },
  {
    icon: expertThree,
    name: 'Mariam M.',
    experience: '3 years',
  },

];

export default Experts;