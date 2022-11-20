import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import './products.scss';
import Product from '../product/product';
import Loading from '../loading/loading';
import coverImg from '../../assets/cover-not-found.jpg';
import { NumberOfProducts } from '../../constants/constants';


function Products() {
  const {loading, books, resultTitle} = useGlobalContext();
  const [numberOfProducts, setNumberOfProducts] = useState(NumberOfProducts.Showed);

  function handleClick() {
    setNumberOfProducts(numberOfProducts + NumberOfProducts.Adding)
  }

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
      <div className='products__title'>
        <h2>{resultTitle}</h2>
      </div>

      <div className='products__layout'>
        {booksWithCovers.slice(0, numberOfProducts).map((book, index) => <Product key={index} product={book} />)}
      </div>

      {numberOfProducts < NumberOfProducts.Needed && (
        <div className='products__more'>
          <button
            className='products__button'
            type='button'
            onClick={() => {
              handleClick()
            }}
          >
            Show more
          </button>
        </div>
      )}
    </>
  );
}

export default Products;
