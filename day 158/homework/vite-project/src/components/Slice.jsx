import React, { useEffect, useState } from 'react'

const Slice = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchSlice = async() => {
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await res.json()
                setData(data)
            }catch (error){
                console.error('error while fetching posts', error)
                console.error(error.message)
            }finally{
                console.log('fetching posts completed')
                setLoading(false)
            }
        }
        fetchSlice()
    }, [])
    const slicedData = data ? data.slice(0, 5) : data
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div className='text-center'>
        <p className='text-[32px]'>first 5 posts</p>
        {slicedData.map((item, index) => {
            const slicedTitle = item.title.slice(0, 50)
            return (
                <div key={index} className='border-solid border-[1px] border-[lightgray] m-[10px] w-[800px]'>
                    <h3>{slicedTitle}</h3>
                    <p>{item.body}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Slice