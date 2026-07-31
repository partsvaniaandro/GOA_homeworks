import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Completed = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [displayPosts, setDisplayPosts] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const fetchCompleted = async() => {
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/todos')
                const data = await res.json()
                setData(data)
            }catch (error){
                console.error('error while fetching todos', error)
                console.error(error.message)
            }finally{
                console.log('fetching todos completed')
                setLoading(false)
            }
        }
        fetchCompleted()
    }, [])
    //filtering uncompleted todos
    const uncompletedTodos = data ? data.filter(i => i.completed === false) : []
    //delete todo function
    const handleDelete = (id) => {
        setData(prev => prev.filter(item => item.id !== id))
    }
    //search function
    const handleSearch = (term) => {
            setSearchTerm(term)
    }
    const filteredTodos = uncompletedTodos.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))

  if (loading) {
    return <h2>Loading...</h2>
  }
  return ( 
    <div className='text-center flex flex-col justify-center items-center'>
        <div className='flex flex-col'>
            <p className='text-[32px]'>unfinished todos</p>
            <button onClick={()=>{
                setDisplayPosts(prev => !prev)
            }}>{displayPosts ? 'hide todos' : 'show todos'}</button>
            <input placeholder='search todos' value={searchTerm} className='border-solid border-[1px] border-lightgray' onChange={(e) => {
                handleSearch(e.target.value)
            }}></input>
        </div>
        <div className={`flex flex-col ${displayPosts ? 'block' : 'hidden'}`}>
            {filteredTodos.length > 0 ? filteredTodos.map((item) => {
            return (
                <div key={item.id} className='border-solid border-[1px] border-[lightgray] flex justify-between w-[600px] m-[10px]'>
                    <p>{item.title}</p>
                    <button onClick={() => handleDelete(item.id)}><FaTrashAlt className='text-red-500'/></button>
                </div>
            )
            }) : <h2>no unfinished todos</h2>}
        </div>
    </div>
  )
}

export default Completed