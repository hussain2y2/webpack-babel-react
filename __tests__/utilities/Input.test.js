import React from 'react'
import { shallow } from 'enzyme'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Input from 'src/utilities/Input'

describe('Input Component', () => {
  let input, inputID
  const id = 'username'
  const label = 'Username'

  beforeAll(() => {
    const { getByTestId, getByLabelText } = render(<Input label={label} id={id} />)
    input = getByLabelText(label)
    inputID = getByTestId(id)
  })

  it('should have the default value', () => {
    expect(input.value).toBe('')
    fireEvent.change(input, { target: { value: 'ok' } })
  })

  it('should have the updated value', () => {
    expect(input.value).toBe('ok')
  })

  it('should have an element with id: username', () => {
    expect(inputID).not.toBeNull()
  })

  const wrapper = shallow(<Input label={label} id={id} />)

  it('have form-group class', () => {
    expect(wrapper.find('.form-group').length).toBe(1)
  })

  afterAll(cleanup)
})
