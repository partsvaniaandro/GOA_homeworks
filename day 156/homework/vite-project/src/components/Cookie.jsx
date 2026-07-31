import React, { useState } from 'react'
import { PiCookieFill } from "react-icons/pi";
const Cookie = () => {
    const [cookieCount, setCookieCount] = useState(0)
  return (
    <div className='flex flex-col items-center justify-center'>
        <button onClick={() => setCookieCount(prev => prev+1)}>
            <PiCookieFill className='text-[156px] text-amber-700 active:scale-95' />
        </button>
        <p>cookies : {cookieCount}</p>
    </div>
  )
}

export default Cookie