import React, { useEffect } from 'react'

const Timer = (props) => {
      useEffect(()=>{
        const timer = setInterval(()=>{
        props.setCount(prev => prev+1)
        console.log('tick')
        }, 1000)
        return () => clearInterval(timer)
      }, [props])
  return (
    <p>{props.count}</p>
  )
}

export default Timer