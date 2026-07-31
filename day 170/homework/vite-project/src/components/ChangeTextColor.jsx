import { useRef, useState} from 'react'

const ChangeTextColor = () => {
    const pRef = useRef(null)
    const [indicator, setIndicator] = useState(false)
  return (
    <div className='flex flex-col items-center gap-[10px]'>
        <p ref={pRef} className='border-[1px] border-red-500 w-[40px] text-center rounded-[5px]'>{indicator ? 'ON' : 'OFF'}</p>
        <button 
        onClick={() => {
            setIndicator(prev => {
                if(!prev){
                    pRef.current.classList.remove('text-red-500')
                    pRef.current.classList.remove('border-red-500')
                    pRef.current.classList.add('text-green-500')
                    pRef.current.classList.add('border-green-500')
                }
                else{
                    pRef.current.classList.remove('text-green-500')
                    pRef.current.classList.remove('border-green-500')
                    pRef.current.classList.add('text-red-500')
                    pRef.current.classList.add('border-red-500')
                }
                return !prev
            })
        }}

        className='hover:cursor-pointer hover:bg-[#373F51] transition border-[#373F51] border-[1px] rounded-[5px] p-[5px]'

        >change color</button>
    </div>
  )
}

export default ChangeTextColor