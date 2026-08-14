import { useState } from "react"

function Btn({ clr, change }) {
  return (
    <button onClick={() => change(clr)} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: clr }}>{clr}</button>
  )
}



export default Btn