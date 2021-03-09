import React from 'react'
import { shallow } from 'enzyme'
import TextInput from '../utils/TextInput'

let wrapped

beforeEach(() => {
  wrapped = shallow(<TextInput />)
})

it('has a text input and label', () => {
  expect(wrapped.find('input').length).toEqual(1)
  expect(wrapped.find('label').length).toEqual(1)
})
