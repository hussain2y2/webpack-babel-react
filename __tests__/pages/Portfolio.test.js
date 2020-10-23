import React from 'react'
import { shallow } from 'enzyme'
import Portfolio from 'src/pages/Portfolio'

describe('Portfolio Component', () => {
  const wrapper = shallow(<Portfolio />)

  it('should rendered correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
