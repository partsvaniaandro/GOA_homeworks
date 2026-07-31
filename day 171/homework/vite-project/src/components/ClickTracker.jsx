import { useRef, useState, useEffect} from 'react'

const ClickTracker = () => {
    const [count, setCount] = useState(0)
    const clickAmountRef = useRef(null)
    useEffect(() => {
        clickAmountRef.current = count+1
    }, [count])
    console.log(`click amount: ${clickAmountRef.current}`)
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='text-[38px] font-medium opacity-[70%]'>{count}</p>
        <button onClick={() => setCount(prev => prev + 1)} className='text-[38px] p-[10px] border-[2px] rounded-[10px] opacity-[70%]'>Increase</button>
    </div>
  )
}

export default ClickTracker