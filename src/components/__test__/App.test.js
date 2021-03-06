import React from 'react'
import { shallow } from 'enzyme'

import App from '../../App'
import ProductCreate from '../products/ProductCreate'
import ProductList from '../products/ProductList'

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('shows a create component', () => {
  expect(wrapped.find(ProductCreate).length).toEqual(1)
})
it('shows a list of products ', () => {
  expect(wrapped.find(ProductList).length).toEqual(1)
})
