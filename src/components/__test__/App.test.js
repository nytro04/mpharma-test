import React from 'react'
import { mount } from 'enzyme'

import App from '../../App'
import ProductCreate from '../products/ProductCreate'
import ProductList from '../products/ProductList'
import { MemoryRouter } from 'react-router'
import Root from '../../Root'
import ProductEdit from '../products/ProductEdit'

it('valid path should render component ', () => {
  const wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </Root>
  )

  expect(wrapped.find(ProductList).length).toEqual(1)
})
it('valid path should render component ', () => {
  const wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={['/products/new']}>
        <App />
      </MemoryRouter>
    </Root>
  )

  expect(wrapped.find(ProductCreate).length).toEqual(1)
})
it('valid path should render component ', () => {
  const wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={['/products/edit/:id']}>
        <App />
      </MemoryRouter>
    </Root>
  )

  expect(wrapped.find(ProductEdit).length).toEqual(1)
})
