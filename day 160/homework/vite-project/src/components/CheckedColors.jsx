import { useId, useState } from 'react'

const CheckedColors = () => {
    const colorId = useId()  
    const colors = ['black', 'white', 'red', 'green', 'yellow', 'blue', 'pink', 'gray', 'brown', 'orange', 'purple']
    const [checkedIds, setCheckedIds] = useState([])
    console.log(`checked colors === [${checkedIds}]`)
  return (
    <div>
        <form>
            {colors.map((item, index) => {
                const id = `${colorId}-${item}`
                return(
                    <div>
                        <label htmlFor={id}>{item}</label>
                        <input type='checkbox' key={index} id={id} onChange={() => {
                        checkedIds.includes(id) ? setCheckedIds(prev => prev.filter(item => item !== id)) : setCheckedIds(prev => [...prev, id])
                        }}/>
                        
                    </div>
                )
            })}
        </form>
    </div>
  )
}

export default CheckedColors