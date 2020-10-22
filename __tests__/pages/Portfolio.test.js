import React from 'react'
import { shallow } from 'enzyme'
import Portfolio from 'pages/Portfolio'

describe('Portfolio Component', () => {
  const wrapper = shallow(<Portfolio />)

  it('should rendered correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
