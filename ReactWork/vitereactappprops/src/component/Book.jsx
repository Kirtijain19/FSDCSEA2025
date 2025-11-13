import React from 'react'
import './Book.css'

function Book({src, title,price, publisher}) {
  return (
    <div className='book'>
      <img src={src} alt="" />
      <p>Title: {title}</p>
      <p>Price: {price}</p>
      <p>Publisher: {publisher}</p>
      <button>Add to cart</button>
    </div>
  )
}

export default Book
