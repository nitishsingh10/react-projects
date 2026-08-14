import { useState } from 'react'
import './App.css'
import Btn from './Button'

function App() {
  const [color,setColor] = useState("lavender")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
              <Btn clr={"red"} change={setColor}/>
              <Btn clr={"blue"} change={setColor}/>
              <Btn clr={"green"} change={setColor}/>
              <Btn clr={"magenta"} change={setColor}/>
              <Btn clr={"black"} change={setColor}/>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
