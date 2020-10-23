import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import App from 'src/App'

describe('App Component', () => {
  const wrapper = shallow(<App />)

  it('component rendered', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('claas name exist',  () => {
    expect(wrapper.find('.app').length).toBe(1)
  })

  it('renders correctly', () => {
    const snapShot = renderer.create(<App />).toJSON()
    expect(snapShot).toMatchSnapshot()
  })
})
