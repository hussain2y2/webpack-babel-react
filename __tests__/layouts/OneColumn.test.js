import React from 'react'
import { shallow } from 'enzyme'

import OneColumn from 'src/layouts/OneColumn'

describe('One Layout Component', () => {
  const wrapper = shallow(<OneColumn />)

  it('component rendered', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should have class: default-layout', () => {
    expect(wrapper.find('.default-layout').length).toBe(1)
  })
})
