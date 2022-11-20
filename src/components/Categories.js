import React from 'react'

const Categories = (props) => {
  const {mode,items,showActive,category,showAll,showCompleted,clearCompleted}=props
  return (
 <div className={`todo${mode}--categories`}>
    <p className={`todo${mode}--remaining ${category==='active'||category==='completed'?'invisible':''}`}>{items.filter(item=>!item.completed).length} items left</p>
    <div className={`todo${mode}--options`}>
      <button onClick={showAll} className={`todo${mode}--option`} style={{color:category==='all'?'hsl(220, 98%, 61%)':'inherit'}}>All</button>
      <button onClick={showActive} className={`todo${mode}--option`} style={{color:category==='active'?'hsl(220, 98%, 61%)':'inherit'}}>Active</button>
      <button onClick={showCompleted} className={`todo${mode}--option`} style={{color:category==='completed'?'hsl(220, 98%, 61%)':'inherit'}}>Completed</button>
    </div>
    <button onClick={clearCompleted} className={`todo${mode}--clear todo${mode}--option`}> Clear Completed</button>
  </div>
  )
}

export default Categories