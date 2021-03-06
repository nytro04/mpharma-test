import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from './../../actions'
import Product from './Product'

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { products } = this.props.products

    console.log(products)

    return (
      <div className='py-3 text-center '>
        <h2>Product List</h2>
        <div className='py-5 row justify-content-center'>
          <div className='col-md-8'>
            {products
              ? products.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              : null}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { fetchProducts })(ProductList)
