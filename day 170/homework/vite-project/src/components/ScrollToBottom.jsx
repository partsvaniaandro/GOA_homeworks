import React, { useRef } from 'react'

const ScrollToBottom = () => {
    const divRef = useRef(null)
    const scrollBotom = () => {
        const el = divRef.current
        el.scrollTop = el.scrollHeight
    }
    const scrollTop = () => {
        const el = divRef.current
        el.scrollTop = '0px'
    }
  return (
    <div className='flex flex-col items-center gap-[10px]'>
        <div className='flex gap-[20px]'>
            <button onClick={() => scrollBotom()} className='hover:cursor-pointer hover:bg-[#373F51] transition border-[#373F51] border-[1px] rounded-[5px] w-[130px] h-[30px]'>Scroll to bottom</button>
            <button onClick={() => scrollTop()} className='hover:cursor-pointer hover:bg-[#373F51] transition border-[#373F51] border-[1px] rounded-[5px] w-[130px] h-[30px]'>Scroll to top</button>
        </div>
        <div ref={divRef} className='h-[800px] w-[80%] border-[1px] border-[#373F51] p-[10px] rounded-[5px] overflow-y-auto text-center'>
            {Array.from({ length: 50 }).map((_, i) => (
                <p key={i}>Line {i + 1}</p>
            ))}
        </div>
    </div>
  )
}

export default ScrollToBottom