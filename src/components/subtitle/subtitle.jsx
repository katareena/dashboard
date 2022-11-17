import React from 'react';
import './subtitle.scss'

function Subtitle({children}) {
  return (
    <div className='subtitle'>
      {children}
    </div>
  )
}

export default Subtitle;