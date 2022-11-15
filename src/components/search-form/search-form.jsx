import React, {useRef, useEffect} from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/plus-icon.svg';
import './search-form.scss';

function SearchForm() {
  const searchText = useRef(null);
  useEffect(() => searchText.current?.focus(), []);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log('Searching...');
  };

  return (
    <form
        className='search'
        method='get'
        action='#'
        onSubmit={handleSubmit}
      >

      <div className='search__inner'>
        <button
          className='search__button'
          type='submit'
          aria-label='search by your products'
        >
          <SearchIcon />
        </button>
        <div className='search__box'>
          <label htmlFor='search-form' aria-hidden='true'></label>
          <input
            id='search-form'
            type='text'
            name='search-form'
            autoComplete='off'
            minLength='2'
            placeholder='Search'
            ref={searchText}
          />
        </div>
      </div>

      <button
        className='search__add-button'
        type='button'
        aria-label='add a new product'
      >
        <AddIcon />        
      </button>
    
    </form>
  )
}

export default SearchForm;