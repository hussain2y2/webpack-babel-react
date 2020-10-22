import React from 'react'
import { shallow } from 'enzyme'
import Home from 'pages/Home'

describe('Home Component', () => {
  const wrapper = shallow(<Home />)

  it('should rendered correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
