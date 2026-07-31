import React, { useEffect } from 'react'

const Hello = () => {
    useEffect(()=>{
        setTimeout(()=>{
            console.log('Hello after 2 seconds')
        }, 2000)
    }, [])
}

export default Hello