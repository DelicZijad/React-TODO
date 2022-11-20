import React from 'react'

const Input = (props) => {
  const {mode,addItem}=props
  return (
    <div className={`todo${mode}--input`}>
      <input onKeyDown={(e)=>addItem(e)} type="text" className={`todo${mode}--enter`}placeholder='create a new todo...' />
    </div>
  )
}

export default Input