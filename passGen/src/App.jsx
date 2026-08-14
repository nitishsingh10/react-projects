import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'


function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword] = useState("");


  const passGen = useCallback(()=>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz";

    if(charAllowed){
      str+="!@#$%^&*";
    }
    if(numberAllowed){
      str+="1234567890";
    }

    while(pass.length<=length){

      let idx = Math.floor(Math.random()*str.length + 1);
      pass+= str.charAt(idx);

    }

    setPassword(pass);

  },[numberAllowed,charAllowed,length,setPassword])

  const passRef = useRef(null);

  useEffect(()=>{passGen()},[length,passGen,charAllowed,numberAllowed])


  const copy = useCallback(()=>{
    passRef.current?.select();
    navigator.clipboard.writeText(passRef.current?.value)
  })


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" className='outline-none w-full py-1 px-3 bg-white' readOnly value={password} ref={passRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copy}>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <input type="range" min={6} max={36} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)}/>
          <label>Length : {length}</label>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} onClick={()=>{setNumberAllowed((prev)=>!prev)}}/>
            <label>Numbers</label>
            <input type="checkbox" defaultChecked={charAllowed} onClick={()=>{setCharAllowed((prev)=>!prev)}}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
