import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './search-form.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/plus-icon.svg';
import { AppRoute } from '../../constants/constants';

function SearchForm() {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();
  
  // set focus
  const input = useRef(null);
  useEffect(() => input.current?.focus(), []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let tempSearchTerm = inputText.trim();

    if((tempSearchTerm.replace(/[^\w\s]/gi,'')).length === 0){
      setSearchTerm('the lost world');
      setResultTitle('Please Enter Something ...');
    } else {
      setSearchTerm(inputText);
    }

    navigate(AppRoute.Products);
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
          onClick={handleSubmit}
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
            ref={input}
            value={inputText}
            onChange={(evt)=>setInputText(evt.target.value)}
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