import React from 'react'
import { mount } from 'enzyme'
import ProductCreate from '../products/ProductCreate'
import Root from '../../Root'

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <ProductCreate />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('show TextInput components', () => {
  expect(wrapped.find('button').length).toEqual(1)
  expect(wrapped.find('input[type="text"]').length).toEqual(1)
  expect(wrapped.find('input[type="number"]').length).toEqual(1)
})

describe(' product name', () => {
  beforeEach(() => {
    wrapped.find('input[type="text"]').simulate('change', {
      target: { name: 'name', value: 'new comment' }
    })
    wrapped.update()
  })

  it('has a text input for product name', () => {
    expect(wrapped.find('input[type="text"]').prop('value')).toEqual(
      'new comment'
    )
  })

  it('text input get emptied when form is submitted ', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('input[type="text"]').prop('value')).toEqual('')
  })
})

describe('product price ', () => {
  beforeEach(() => {
    wrapped.find('input[type="number"]').simulate('change', {
      target: { name: 'prices', value: 'new price' }
    })
    wrapped.update()
  })

  it('has a text input for product name', () => {
    expect(wrapped.find('input[type="number"]').prop('value')).toEqual(
      'new price'
    )
  })

  it('text input get emptied when form is submitted ', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('input[type="number"]').prop('value')).toEqual('')
  })
})
