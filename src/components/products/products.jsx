import React from 'react';
import { useGlobalContext } from '../../context';
import Book from '../book/book';
import Loading from '../loading/loading';
import coverImg from '../../assets/cover-not-found.jpg';
import './products.scss'

// https://covers.openlibrary.org/b/id/240727-S.jpg

function Products() {
  const {loading, books, resultTitle} = useGlobalContext();

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // clearing id from /works/
      id: (singleBook.id).replace('/works/', ''),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
    }
  });

  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='booklist__wrap'>
        <div className='booklist__title'>
          <h2>{resultTitle}</h2>
        </div>

        <div className='booklist__content'>
          {booksWithCovers.slice(0, 30).map((book, index) => <Book key={index} book={book} />)}
        </div>
      </div>
    </section>
  )
}

export default Products;
