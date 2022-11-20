import React from 'react';
import Categories from './Categories';
import Item from './Item';

const Display = (props) => {
  const {mode,items,itemCompleted,showActive,category,showAll,showCompleted,clearCompleted,deleteTask}=props;

  return (
    <div className={`todo${mode}--display`}>
 {items.map((item,index)=>(
  <Item key={index}
   mode={mode} 
   item={item}
     itemCompleted={itemCompleted}
       category={category}
     deleteTask={deleteTask}  
   />
 ))}
 <Categories mode={mode} 
 items={items}
 showActive={showActive}
  category={category}
 showAll={showAll}
 showCompleted={showCompleted}
 clearCompleted={clearCompleted}
 />
    </div>
  )
}

export default Display