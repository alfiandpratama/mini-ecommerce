import React from 'react'
import { Link } from 'react-router-dom'
import { HeartFilled } from '@ant-design/icons'
import './product.style.css'

function Product ({ products }) {
  return (
    <div className='product'>
      {products.map((product) => (
        <Link
          key={product.id}
          to={{
            pathname: '/product',
            state: {
              product
            }
          }}
        >
          <div className='product__box'>
            <img
              src={product.imageUrl}
              alt='product-img'
              className='product__image'
            />
            <div className='product__icon'>
              <HeartFilled />
            </div>
            <div className='product__title'>{product.title}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Product
