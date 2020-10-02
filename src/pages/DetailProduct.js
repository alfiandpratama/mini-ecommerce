import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../redux/cart/cart.actions'
import { HeartFilled, ArrowLeftOutlined, ShareAltOutlined } from '@ant-design/icons'
import Navigation from '../components/navigation/navigation.component'

function DetailProduct (props) {
  console.log(props)
  const { imageUrl, title, description, price } = props.location.state.product
  return (
    <div className='detail'>
      <div className='detail__image'>
        <img src={imageUrl} alt='detail' />
        <ArrowLeftOutlined className='icon-back' onClick={() => props.history.goBack()} />
        <ShareAltOutlined className='icon-share' />
      </div>
      <div className='detail__title'>
        <h3>{title}</h3>
        <HeartFilled className='icon-heart' />
      </div>
      <div className='detail__desc'>
        <p>{description}</p>
      </div>
      <div className='detail__action'>
        <p>{price}</p>
        <button className='btn' onClick={() => props.addItem(props.location.state.product)}>Buy</button>
      </div>
      <Navigation />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(DetailProduct)
