import { useEffect } from 'react'

const Mount = () => {
    useEffect(()=>{
        console.log('component mounted')
    }, [])
}

export default Mount