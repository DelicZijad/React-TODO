import React from 'react'

const Item = (props) => {
  const {mode,item,itemCompleted,category,deleteTask}=props

  return (
     <div className={`todo${mode}--item ${(!item.completed && category==='completed')||(category==='active' && item.completed)?'hide':''}`}>
    <button onClick={(e)=>itemCompleted(e)}  className={`todo${mode}--check`} data-completed={item.completed} style={{backgroundImage:item.completed ?"linear-gradient(to bottom,hsl(192, 100%, 67%),hsl(280, 87%, 65%))":'none'}}>{(item.completed && '✓') || ''}</button>
    <p className={`todo${mode}--txt ${item.completed && `completed${mode}`}`}>{item.value}</p>
    <button onClick={deleteTask}className={`todo${mode}--cross ${item.completed ?'':'hide'}`}>X</button>
   </div>
  )
}

export default Item