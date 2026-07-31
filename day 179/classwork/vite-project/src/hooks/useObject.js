import React from 'react'
import { useState } from 'react'
const useObject = (initial = {}) => {
    const [object, setObject] = useState(initial)
    const set = (newObj) => {
        setObject(newObj)
    }
    const reset = () => {
        setObject(initial)
    }


    const merge = (obj) => {
        setObject(prev => ({...prev, ...obj}))
    }


    const removeKey = (key) => {
        setObject(prev => {
            const newObj = {...prev}
            delete newObj[key]
            return newObj
        })
    }

    const toggle = (key) => {
        setObject(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const clear = () => setObject({});
    
    return [object, set, reset, merge, removeKey, toggle, clear]
}

export default useObject