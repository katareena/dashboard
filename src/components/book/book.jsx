import React from 'react';
import './book.scss';
import { Link } from 'react-router-dom';

function Book({book}) {
  return (
    <article className='book-item'>
      <div className='book-item-img'>
        <img src={book.cover_img} alt='cover' />
      </div>
      <div className='book-item-info'>
        <Link to={`/book/${book.id}`} book={book}>
          <div className='book-item-info-item'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item'>
          <span className='text-capitalize '>Author: </span>
          <span>{book.author ? book.author.join(', ') : 'The Author Is Not Known'}</span>
        </div>

        <div className='book-item-info-item'>
          <span className='text-capitalize'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item'>
          <span className='text-capitalize'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </article>
  )
}

export default Book;
