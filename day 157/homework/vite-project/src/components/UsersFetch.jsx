import React, { useEffect, useState } from 'react'

const UsersFetch = () => {
    const [users, setUsers] = useState(null)
    useEffect(() => {
        const controller = new AbortController()
        const fetchUsers = async() => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users', {
                    signal: controller.signal
                })
                const data = await res.json()
                setUsers(data)
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error while fetching users', error)
                }
            }
        }
        fetchUsers()
        return () => controller.abort()
    }, [])
    if (!users) return(<p>loading...</p>)
    return (
      <div className='flex flex-wrap gap-[200px] text-center'>
        {users.map((items, index) => {
            return(
                <div key={index}>
                    <p>user: {items.id}</p>
                    <p>name: {items.name}</p>
                    <p>email: {items.email}</p>
                </div>
            )
        })}
      </div>
    )
}

export default UsersFetch