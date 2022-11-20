import Display from './Display'
import Heading from './Heading'
import Input from './Input'

const ToDo = (props) => {
  const {mode,addItem,items,itemCompleted,showActive,category,showAll,showCompleted,clearCompleted,deleteTask,changeMode,src}=props;
  return(
    <section className={`todo${mode} container`}>
        <Heading mode={mode}
         changeMode={changeMode}
      src={src}
          />
        <Input mode={mode}
        addItem={addItem}
         />
        <Display mode={mode}
        items={items}
        itemCompleted={itemCompleted}
        showActive={showActive}
         category={category}
          showAll={showAll}
          showCompleted={showCompleted}
          clearCompleted={clearCompleted}
          deleteTask={deleteTask}  
        />
    </section>
  )
}

export default ToDo