import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header/header.component'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../redux/cart/cart.selectors'

function Cart ({ cartItems }) {
  return (
    <div className='cart'>
      <Header icon={<ArrowLeftOutlined />} title='Cart' />
      <div className='cart__list'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <Link
              key={cartItem.id}
              to={{
                pathname: '/product',
                state: {
                  product: cartItem
                }
              }}
            >
              <div className='box'>
                <img src={cartItem.imageUrl} alt='product' />
                <div className='box__desc'>
                  <p>{cartItem.title}</p>
                  <p>{cartItem.price}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(Cart)
