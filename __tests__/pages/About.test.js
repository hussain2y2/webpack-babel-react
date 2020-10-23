import React from 'react'
import { shallow } from 'enzyme'
import About from 'src/pages/About'

describe('About Us Component', () => {
  const wrapper = shallow(<About />)

  it('should rendered', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
