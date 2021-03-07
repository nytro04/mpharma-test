import React, { Component } from 'react'
import { connect } from 'react-redux'
// import TextInput from '../utils/TextInput'
import { createProduct } from './../../actions'
// import classnames from 'classnames'

class ProductCreate extends Component {
  state = {
    name: '',
    prices: ''
    // errors: {}
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { name, prices } = this.state

    const id = Math.floor(Math.random() * 100000 + 10)

    const newProduct = {
      id,
      name,
      prices,
      date: Date.now()
    }

    this.props.createProduct(newProduct)

    this.setState({
      name: '',
      prices: ''
      // date: '',
      // errors: {}
    })

    // this.props.history.push('/')
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { name, prices } = this.state
    return (
      <div className=''>
        <h3 className='py-4 text-center'>Create a Product</h3>
        <div className='py-5 row justify-content-center'>
          <div className='col-md-8'>
            <div className='mb-3 card'>
              <div className='card-header'>Add New Product</div>
              <div className='card-body'>
                <form onSubmit={this.handleSubmit}>
                  <div className='form-group'>
                    <label htmlFor='name'>Product Name</label>
                    <input
                      type='text'
                      name='name'
                      placeholder='Enter Product Name'
                      value={name}
                      onChange={this.onChange}
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='price'>Product price</label>
                    <input
                      type='number'
                      name='prices'
                      placeholder='Enter Product Price'
                      value={prices}
                      onChange={this.onChange}
                      required
                      className='form-control'
                    />
                  </div>

                  <button className='btn btn-primary btn-block'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { createProduct })(ProductCreate)
