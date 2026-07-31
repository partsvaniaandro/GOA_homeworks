import PostFetch from './components/PostFetch'
import UsersFetch from './components/UsersFetch'

function App() {
  return (
    <>
      <div className='flex flex-col gap-[100px] justify-[center]'>
        <PostFetch />
        <UsersFetch />
      </div>
    </>
  )
}

export default App
