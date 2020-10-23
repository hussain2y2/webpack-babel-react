import React from 'react'
import { shallow } from 'enzyme'
import News from 'src/pages/News'

describe('News Component', () => {
  const wrapper = shallow(<News />)

  it('should rendered correctly', function () {
    expect(wrapper.exists()).toBe(true)
  })
})
