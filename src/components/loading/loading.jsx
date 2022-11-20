import React from 'react';
import './loading.scss';

function Loading({children}) {
  return (
    <div className='loading'>      
      {children}
      <span>Loading...</span>
    </div>
  );
}

export default Loading;
