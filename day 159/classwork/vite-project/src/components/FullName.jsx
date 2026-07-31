//*2) შექმენი კომპონენტი, სადაც ორი ტექსტური ინფუთი იქნება (firstName და lastName) და თითოეულისთვის უნიკალური ID-ები გენერირდეს useId-ით.
import {useId} from 'react'

const FullName = () => {
    const firstNameId = useId()
    const lastNameId = useId()
  return (
    <div>
        <input id={firstNameId} placeholder='enter your first name'/>
        <input id={lastNameId} placeholder='enter your last name'/>
    </div>
  )
}

export default FullName