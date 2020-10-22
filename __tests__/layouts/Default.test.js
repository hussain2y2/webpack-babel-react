import React from 'react'
import { shallow } from 'enzyme'

import Default from 'layouts/Default'

describe('Default Layout Component', () => {
  const wrapper = shallow(<Default />)

  it('component rendered', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should have class: default-layout', () => {
    expect(wrapper.find('.default-layout').length).toBe(1)
  })

  it('should have h4 tag',() => {
    expect(wrapper.find('h4').length).toBe(1)
  })

  it('should h4 text: Default Layout', () => {
    expect(wrapper.find('h4').text()).toBe('Default Layout')
  })
})
