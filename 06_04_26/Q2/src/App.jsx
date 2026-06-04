import { useState ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { use } from 'react'

function App() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(-1);
  const reff=useRef();
  const add=()=>{
    const value=reff.current.value;
    console.log(value);
    if(value){
      const newItems=[...items];
      newItems.splice(index+1,0,value);
      setItems(newItems);
      setIndex(index+1);
    }
  }

  const undo=()=>{
    if(index>=0){
      setIndex(index-1);
    }
  }
  
  const redo=()=>{
    if(index<items.length-1){
      setIndex(index+1);
    }
  } 

  return (
    <>
      <input type="text" placeholder="Enter an item" ref={reff}/>
      <button onClick={add}>Add</button>
       <h1>{items.length===0?`No item selected`:items[index]}</h1>

       <button onClick={undo}>Undo</button>
 <button onClick={redo}>redo</button>
          
    </>
  )
}

export default App
