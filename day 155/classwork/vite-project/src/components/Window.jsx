import React, { useEffect, useState } from 'react'

const Window = () => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        function handleResize(){
            setWidth(window.innerWidth)
            console.log(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
  return (
    <div>{width}</div>
  )
}

export default Window