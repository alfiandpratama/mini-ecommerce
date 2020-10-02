import React, { useEffect, useState } from 'react'
import Header from '../components/header/header.component'
import Banner from '../components/banner/banner.component'
import Product from '../components/product/product.component'
import Navigation from '../components/navigation/navigation.component'
import { HeartOutlined } from '@ant-design/icons'
function HomePage () {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await window.fetch(
        'https://private-4639ce-ecommerce56.apiary-mock.com/home'
      )
      const data = await res.json()

      setCategories(data[0].data.category)
      setProducts(data[0].data.productPromo)
    }

    fetchData()
  }, [])

  return (
    <div className='homepage'>
      <Header icon={<HeartOutlined />} isSearch searchClick />
      <Banner categories={categories} />
      <Product products={products} />
      <Navigation />
    </div>
  )
}

export default HomePage
