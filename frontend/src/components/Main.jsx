import React from 'react'
import NavbarComponent from './NavbarComponent'
import { Row } from 'react-bootstrap'
import Category from './Category'
import ProductDetail from './ProductDetail'
import Order from './Order'

export default function Main() {
  return (
    <>
    <NavbarComponent />
    <div className="container-fluid mt-3">
      <Row>
        <Category />
        <ProductDetail />
        <Order />
      </Row>
    </div>
    </>
  )
}
