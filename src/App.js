import React,{useState,useEffect} from 'react'
import './App.scss';
import Header from './components/Header';
import ToDo from './components/ToDo';
import sun from './images/icon-sun.svg'
import moon from './images/icon-moon.svg'
function App() {
  const [mode,setMode]=useState(localStorage.getItem('mode')||'Dark');
  const[src,setSrc]=useState(localStorage.getItem('src')||sun)
  const [items,setItems]=useState(JSON.parse(localStorage.getItem('tasks'))||[])
  const [itemChecked,setItemChecked]=useState([]);
  const [category,setCategory]=useState('all');
  console.log('before');
 useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(items))
 localStorage.setItem('mode',mode)
 localStorage.setItem('src',src)
  },[items,mode,src]);
 function setAndSave(newItems){
   setItems(newItems)
    setItemChecked(newItems.map(item=>item.completed))
 }
  function addItem(e){
    const value=e.target.value;
  if(e.key!=='Enter')return
const newItems=[...items,{value:value,completed:false}]
 setAndSave(newItems)
  e.target.value='';

  }
  function itemCompleted(e){
       const btns=[...document.getElementsByClassName(e.target.classList)]
   const btnIndex=btns.indexOf(e.target);
   let newItems=JSON.parse(localStorage.getItem('tasks'))
 if(itemChecked[btnIndex]){
   newItems=newItems.map((item,i)=>{
      const newItem={...item,id:btnIndex}
    return newItem.id===i?{...item,completed:false}:item;
    })
 }
 else{ 
  newItems=newItems.map((item,i)=>{
  const newItem={...item,id:btnIndex}
   return newItem.id===i?{...item,completed:true}:item;
  })
 }
setAndSave(newItems)
}

function showActive(e){
  setCategory('active')
}
function showAll(e){
  setCategory('all')
}
function showCompleted(e){
  setCategory('completed')
}
function clearCompleted(e){
const newItems=JSON.parse(localStorage.getItem('tasks')).filter(item=>!item.completed)
setAndSave(newItems)
}
function deleteTask(e){
  const deleteBtns=[...document.getElementsByClassName(e.target.className)]
  const index=deleteBtns.indexOf(e.target)
const newItems=JSON.parse(localStorage.getItem('tasks')).filter((item,i)=>i!==index);
setAndSave(newItems)
}
function changeMode(e){
if(mode==='Dark'){
setMode('Light');
setSrc(moon)
}
else {
  setMode('Dark');
setSrc(sun)
}
}
  return (
    <main className={`app${mode}`}>
    <Header mode={mode}/>
    <ToDo mode={mode} 
    addItem={addItem}
    items={items}
    itemCompleted={itemCompleted}
    itemChecked={itemChecked}
    showActive={showActive}
    showAll={showAll}
    showCompleted={showCompleted}
    clearCompleted={clearCompleted}
    category={category}
    deleteTask={deleteTask}
    changeMode={changeMode}
  src={src}
    />
    </main>
  );
}

export default App;
