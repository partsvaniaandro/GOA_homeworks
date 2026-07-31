import React, { useEffect, useState } from 'react'

const PostFetch = () => {
    const [post, setPost] = useState(null)
    useEffect(() => {
        const fetchPost = async() => {
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
                const data = await res.json()
                setPost(data)
            }catch (error){
                console.error('Error while fetching post', error)
            }
        }
        fetchPost()
    }, [])

    if (!post) return <p>loading...</p>

    return (
      <div className='text-center'>
          <h2>title: <br></br>{post.title}</h2>
          <p>description:<br></br>{post.body}</p>
      </div>
    )
}

export default PostFetch