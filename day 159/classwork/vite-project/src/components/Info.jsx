//*3) შექმენი 5 <input>-ის ფორმა (მაგალითად email, password, address…) და ყველა იუზერზე უნიკალური ID-ები შეინახე useId-ში.
import { useId } from 'react'

const Info = () => {
    const emailId = useId()
    const passwordId = useId()
    const adressId = useId()
  return (
    <div>
        <input id={emailId} type='email'/>
        <input id={passwordId} type='password'/>
        <input id={adressId}/>
    </div>
  )
}

export default Info