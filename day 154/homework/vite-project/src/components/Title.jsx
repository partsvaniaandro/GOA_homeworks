import React, { useEffect } from 'react'

const Title = () => {
    useEffect(()=>{
        document.title = 'My first useEffect'
    }, [])
}

export default Title