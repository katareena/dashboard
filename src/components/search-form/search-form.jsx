import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './search-form.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/plus-icon.svg';
import { AppRoute, SearchFormNotification, DefaultInputValue } from '../../constants/constants';

function SearchForm() {
  const {setSearchTerm, setResultTitle, setIsInputValud} = useGlobalContext();
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();
  
  // set focus
  const input = useRef(null);
  useEffect(() => {
    input.current?.focus();

    if (inputText.length === 0) {
      setSearchTerm(DefaultInputValue);
      setResultTitle(SearchFormNotification.Default);
    }

  }, [inputText.length, setSearchTerm, setResultTitle]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let tempSearchTerm = inputText.trim();

    if ((tempSearchTerm.replace(/[^\w\s]/gi,'')).length === 0) {
      setIsInputValud(false);
      setResultTitle(SearchFormNotification.Empty);
      return;
    } else {
      setIsInputValud(true);
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
            placeholder='Search'
            autoComplete='off'
            ref={input}
            value={inputText}
            onChange={(evt)=>setInputText(evt.target.value)}
            required
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