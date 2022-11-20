import React from 'react';
import './book.scss';
import { Link } from 'react-router-dom';

function Book({book}) {
  return (
    <article className='book'>
      <div className='book__img'>
        <img src={book.cover_img} alt='cover' />
      </div>

      <div className='book__info'>
        <Link to={`/book/${book.id}`} book={book}>
          <div className='book__info-item'>
            <span className='book__title'>{book.title}</span>
          </div>
        </Link>

        <div className='book__info-item'>
          <span className='book__info-label'>Author: </span>
          <span>{book.author ? book.author.join(', ') : 'The Author Is Not Known'}</span>
        </div>

        <div className='book__info-item'>
          <span className='book__info-label'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book__info-item'>
          <span className='book__info-label'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </article>
  )
}

export default Book;
