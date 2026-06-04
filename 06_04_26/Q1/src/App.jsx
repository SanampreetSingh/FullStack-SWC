import { use, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(2);
  const [click, setClick] = useState(1);
  // let click =useRef(0);
  let handleclick = () => {
    // click.current = click.current + 1;
    setClick(click + 1);
    if(click % 3 === 0){

    setCount(count *2);
  }
  }
  return (
    <>
      <button type="button" onClick={handleclick}>
        Click me
      </button>
      <p>Count: {count}</p>
    </>
  )
}

export default App
