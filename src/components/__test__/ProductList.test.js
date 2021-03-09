import React from 'react'
import { mount } from 'enzyme'
import Root from '../../Root'
import ProductList from '../products/ProductList'
import Product from '../products/Product'
import { MemoryRouter } from 'react-router'

let wrapped

beforeEach(() => {
  // const initialState = {
  //   productList: [<Product />, <Product />]
  // }

  wrapped = mount(
    <Root>
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    </Root>
  )
})

it('shows list of products', () => {
  expect(wrapped.find(Product).length).toEqual(3)
})
