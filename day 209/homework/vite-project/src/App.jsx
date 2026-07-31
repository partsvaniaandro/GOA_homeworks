import axios from "axios"
import { useEffect, useState, useRef } from "react";

function App() {

  const [posts, setPosts] = useState([])

  const previewRef = useRef(null)
  const [postPreview, setPostPreview] = useState(false)

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if(previewRef.current && !previewRef.current.contains(event.target)){
        setPostPreview(false)
        setTitle('')
        setText('')
      }
    }

    document.addEventListener('mousedown', clickOutsideHandler)
    
    return () => {
      document.addEventListener('mousedown', clickOutsideHandler)
    }
  }, [])

  const handleTitleInput = (e) => {
    setTitle(e.target.innerText)
  }
  const handleTextInput = (e) => {
    setText(e.target.innerText)
  }

  const handlePost = async () => {
    if(title === ''){
      console.log('the title field is empty')
      setTitle('')
      return
    }
    if(text === ''){
      console.log('the text field is empty')
      setText('')
      return
    }
    try{
      const res = await axios.post('http://localhost:3008/posts', {
        title,
        text
      })

      setPosts(prev => [...prev, res.data])
    } catch(err){
      console.error(err)
    }
    setPostPreview(false)
  }
  return (
    <div className="bg-[#F0F2F5] min-h-screen relative p-[30px] flex flex-col items-center gap-[50px]">
      <button className="bg-[#1877F2] p-[10px] rounded-[5px] text-[#ffffff] font-medium hover:bg-[#166FE5] hover:cursor-pointer" onClick={() => setPostPreview(true)}>add post</button>
      {postPreview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1]">
          <div className="bg-[#bebfc2] p-[10px] flex flex-col gap-[50px] items-center justify-center" ref={previewRef}>
            <div className="bg-[#F0F2F5] w-[600px] min-h-[300px] p-[20px] flex flex-col gap-[30px] border-solid border-[1px] border-[black]" ref={previewRef}>
              <div>
                <div className="flex justify-between">
                  <p className="font-medium text-[18px]">Title</p>
                  {title === '' && (
                    <p className="text-[#FA383E]">the title field is empty</p>
                  )}
                </div>
                <div className="border-solid border-[#DADDE1] border-[2px] max-w-[90%] min-h-[30px] font-medium text-[18px] p-[5px]" contentEditable suppressContentEditableWarning onInput={handleTitleInput}>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <p className="font-medium text-[18px]">Text</p>
                  {text === '' && (
                    <p className="text-[#FA383E]">the text field is empty</p>
                  )}
                </div>
                <div className="border-solid border-[#DADDE1] border-[2px] max-w-[95%] min-h-[200px] text-[16px] p-[5px]" contentEditable suppressContentEditableWarning onInput={handleTextInput}>
                </div>
              </div>
            </div>
            <div className="bg-[#F0F2F5] w-[300px] h-[60px] flex justify-center items-center border-solid border-[1px] border-[black]">
              <button className="bg-[#1877F2] pl-[60px] pr-[60px] p-[10px] rounded-[5px] text-[#ffffff] font-medium hover:bg-[#166FE5] hover:cursor-pointer" onClick={(handlePost)}>publish</button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-[20px]">
        {posts.map((item) => (
          <div className="p-[2px] bg-[#bebfc2]">
            <div className="bg-[#F0F2F5] w-[600px] min-h-[300px] p-[20px] flex flex-col gap-[30px] border-solid border-[1px] border-[black] relative top-[-5px] left-[-5px]">
                <div className="border-solid border-[#DADDE1] border-[2px] max-w-[90%] min-h-[30px] font-medium text-[18px] p-[5px]">
                  <p>{item.title}</p>
                </div>
                
                <div className="border-solid border-[#DADDE1] border-[2px] max-w-[95%] min-h-[200px] text-[16px] p-[5px]">
                  <p>{item.text}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
