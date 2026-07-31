import React, { useEffect } from 'react'

const Cleanup = () => {
    useEffect(()=>{
        console.log('component mounted')
        return(
            console.log('cleanup')
        )
    }, [])
}

export default Cleanup