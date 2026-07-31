//*შექმენი სიების კომპონენტი, სადაც თითოეული ელემენტი (მაგალითად checkbox) მიიღებს უნიკალურ ID-ს useId-ით.
//*მაგალითად: Favorite fruits: Apple, Banana, Orange.
//*თითოეულისთვის <input> checkbox და <label> უნდა იყოს.
import { useId } from 'react'

const Fruits = () => {
    const fruits = ['apple', 'orange', 'banana']
    const id = useId()
  return (
    <div>
        <ul>
            {fruits.map((fruit, i)=>{
                const newId = `${id}-${i}`
                return(
                    <li key={fruit}>
                        <input id={newId} placeholder={fruit}/>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Fruits