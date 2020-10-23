import React from 'react'
import { shallow } from 'enzyme'

import Default from 'src/layouts/Default'

describe('Default Layout Component', () => {
  const wrapper = shallow(<Default />)

  it('component rendered', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should have class: default-layout', () => {
    expect(wrapper.find('.default-layout').length).toBe(1)
  })
})
