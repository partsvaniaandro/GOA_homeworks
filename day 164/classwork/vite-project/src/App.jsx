import { useState } from "react"
import { UsersListContext } from "./context/UsersListContext"
import { ThemeProvider } from "./context/ThemeContext"

import Form from "./components/Form"
import UsersList from "./components/UsersList"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  const [usersList, setUsersList] = useState([])
  const formFunction = (user) => {
    setUsersList(prev => [...prev, user])
  } 
  return (
    <>
      <ThemeProvider>
        <UsersListContext.Provider value={{usersList: usersList, addUser: formFunction}}>
          <Form />
          <UsersList />
        </UsersListContext.Provider>

        <ThemeToggle />
      </ThemeProvider>
    </>
  )
}

export default App
