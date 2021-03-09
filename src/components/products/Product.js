import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteProduct } from './../../actions'

class Product extends Component {
  checkDates = (prices) => {
    if (Array.isArray(prices)) {
      if (prices[0].date > prices[1].date) {
        return (
          <li key={prices[0].id} className='list-group-item'>
            Prices: {prices[0].price}
          </li>
        )
      }
      return (
        <li key={prices[1].id} className='list-group-item'>
          Prices: {prices[1].price}
        </li>
      )
    }
  }

  showCards = (product) => {
    if (product.name) {
      return (
        <div className='card card-body mb-3'>
          <h4>
            <span className='mr-3'>Name:</span>
            {product.name}
            <i
              className='far fa-trash-alt'
              style={{ cursor: 'pointer', float: 'right', color: 'red' }}
              onClick={() =>
                this.props.deleteProduct(product.id, product.prices)
              }
            />
            <Link to={`products/edit/${product.id}`}>
              <i
                className='fas fa-pencil-alt'
                style={{
                  cursor: 'pointer',
                  float: 'right',
                  color: 'black',
                  marginRight: '1rem'
                }}
              />
            </Link>
          </h4>

          <ul className='list-group'>
            {Array.isArray(product.prices) ? (
              this.checkDates(product.prices)
            ) : (
              <li className='list-group-item'>Prices: {product.prices}</li>
            )}
          </ul>
        </div>
      )
    }
    return null
  }

  render() {
    const { product } = this.props

    return (
      <div className='card card-body mb-3'>
        <h4>
          <span className='mr-3'>Name:</span>
          {product.name}
          <i
            className='far fa-trash-alt'
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={() => this.props.deleteProduct(product.id)}
          />
          <Link to={`products/edit/${product.id}`}>
            <i
              className='fas fa-pencil-alt'
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h4>

        <ul className='list-group'>
          {Array.isArray(product.prices) ? (
            this.checkDates(product.prices)
          ) : (
            <li className='list-group-item'>Prices: {product.prices}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default connect(null, { deleteProduct })(Product)
