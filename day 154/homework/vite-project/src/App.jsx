import Mount from "./components/mount"
import Title from "./components/Title"
import Count from "./components/Count"
import Hello from "./components/Hello"
import Cleanup from "./components/Cleanup"
import TaskList from "./components/TaskList"
import Pop from "./components/Pop"
import Date from "./components/Date"
function App() {
  return (
    <>
      <Title />
      <Mount />
      <Count />
      <Hello />
      <Cleanup />
      <TaskList />
      <Pop />
      <Date />
    </>
  )
}

export default App
