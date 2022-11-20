import React from 'react';
import { useGlobalContext } from '../../context';
import './products.scss';
import Product from '../product/product';
import Loading from '../loading/loading';
import coverImg from '../../assets/cover-not-found.jpg';
import { NumberOfProducts } from '../../constants/constants';


function Products() {
  const {loading, books, resultTitle} = useGlobalContext();

  console.log(books);

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // clearing id from /works/
      id: (singleBook.id).replace('/works/', ''),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
    }
  });

  if (loading) return (
    <Loading >
      <p>Redirecting to the Product Page</p>
    </Loading>
  );  

  return (
    <>
      <div className='booklist__title'>
        <h2>{resultTitle}</h2>
      </div>

      <div className='booklist__layout'>
        {booksWithCovers.slice(0, NumberOfProducts.Showed).map((book, index) => <Product key={index} product={book} />)}
      </div>
    </>
  );
}

export default Products;
