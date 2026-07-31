import { useContext } from 'react'
import { UsersListContext } from '../context/UsersListContext'

const UsersList = () => {
    const { usersList } = useContext(UsersListContext)
  return (
    <div>
        <ul>
            {usersList.map((item) => (
                <li key={item.id}>
                    <p>name: {item.name}</p>
                    <p>age: {item.age}</p>
                    <p>email: {item.email}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UsersList