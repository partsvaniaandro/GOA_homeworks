import React, { useEffect, useRef, useState } from 'react'

const FilterUsers = () => {
    const [usersData, setUsersData] = useState([])
    const [userInput, setUserInput] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([])
    const timeoutRef = useRef(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsersData(data))
        .catch(err => console.error(err))
    },[])

    useEffect(()=>{
        timeoutRef.current = setTimeout(() => {
            const filteredArr = usersData.filter((item) => (
                item.name.toLowerCase().includes(userInput.toLowerCase())
            ))
            setFilteredUsers(filteredArr)
        }, 1000);
    },[userInput, usersData])
    
  return (
    <div className='flex flex-col justify-center items-center'>
        <input onChange={(e) => setUserInput(e.target.value)}/>
        <div className='flex flex-col gap-[20px]'>
            {filteredUsers.map((item) => (
                <div key={item.id} className='border-[2px] rounded-[5px] p-[2px]'>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FilterUsers