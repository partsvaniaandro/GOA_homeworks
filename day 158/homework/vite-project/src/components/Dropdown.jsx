import React, { useEffect, useState } from 'react'

const Dropdown = () => {
    const [data, setData] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    //fetching posts
    useEffect(()=>{
        const fetchPosts = async() => {
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await res.json()
                setData(data)
            }catch (error){
                console.error('error while fetching posts', error)
                console.error(error.message)
            }finally{
                console.log('fetching posts completed')
            }
        }
        fetchPosts()
    }, [])
//slicing first 5 posts
    const slicedData = data.slice(0, 5)
  return (
    <div>
        <select onChange={(e) => setSelectedPost(slicedData[e.target.value])}>
            <option>select a post</option>
            {slicedData.map((item, index) => {
                return(
                    <option key={item.id} value={index}>{item.title}</option>
                )
            })}
        </select>
        <div>
            {selectedPost && <p className='w-[800px] border-solid border-[1px] border-[lightgray] m-[10px]'>{selectedPost.body}</p>}
        </div>
    </div>
  )
}

export default Dropdown