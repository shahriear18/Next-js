"use client";

import { useState } from "react";

const page = () => {
  let [disable,setdisable] = useState(false)
  let turn = "x";
  let handleturn = (e) =>{
    if (turn == "x" && e.target.innerText == "" ){
    e.target.innerText = "x";
    turn = "o";
    }else if (turn == "o" && e.target.innerText == ""){
    e.target.innerText = "o"
    turn = "x";
    }
  }
  return (
    <div className=' bg-[#000000] h-[641px] flex justify-center'>
      <div className='h-[400px] w-[400px]  bg-[#00f7ffa2] rounded-2xl overflow-hidden grid grid-cols-3 p-7'>
        <button disabled={disable} onClick={handleturn} className='h-[100px] w-[100px] bg-[#15ff00a1] rounded-2xl text-[100px] flex justify-center items-center pb-7 text-[700]'></button>
        <button disabled={disable} onClick={handleturn} className='h-[100px] w-[100px] bg-[#15ff00a1] rounded-2xl text-[100px] flex justify-center items-center pb-7 text-[700]'></button>
        <button disabled={disable} onClick={handleturn} className='h-[100px] w-[100px] bg-[#15ff00a1] rounded-2xl text-[100px] flex justify-center items-center pb-7 text-[700]'></button>
        <button disabled={disable} onClick={handleturn} className='h-[100px] w-[100px] bg-[#15ff00a1] rounded-2xl text-[100px] flex justify-center items-center pb-7 text-[700]'></button>
        <button disabled={disable} onClick={handleturn} className='h-[100px] w-[100px] bg-[#15ff00a1] rounded-2xl text-[100px] flex justify-center items-center pb-7 text-[700]'></button>
        <button disabled={disable} onClick={handleturn} className='h-[100px] w-[100px] bg-[#15ff00a1] rounded-2xl text-[100px] flex justify-center items-center pb-7 text-[700]'></button>
        <button disabled={disable} onClick={handleturn} className='h-[100px] w-[100px] bg-[#15ff00a1] rounded-2xl text-[100px] flex justify-center items-center pb-7 text-[700]'></button>
        <button disabled={disable} onClick={handleturn} className='h-[100px] w-[100px] bg-[#15ff00a1] rounded-2xl text-[100px] flex justify-center items-center pb-7 text-[700]'></button>
        <button disabled={disable} onClick={handleturn} className='h-[100px] w-[100px] bg-[#15ff00a1] rounded-2xl text-[100px] flex justify-center items-center pb-7 text-[700]'></button>
      </div>
      </div>
  )
}

export default page