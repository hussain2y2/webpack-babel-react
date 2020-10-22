import React, { useState } from 'react'

const Input = ({id, label, type = 'text'}) => {
  const [value, handleChange] = useState('')

  return (
   <div className="form-group">
     <label htmlFor={id}> {label} </label>
     <input
       type={type}
       id={id}
       data-testid={id}
       aria-label={label}
       onChange={({target}) => {
         handleChange(target.value)
       }}
       value={value}
     />
   </div>
  )
}

export default Input
