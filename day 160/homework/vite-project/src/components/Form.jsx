import { useId } from 'react'

const Form = () => {
    const nameId = useId()
    const emailId = useId()
    const passwordId = useId()
  return (
    <div>
        <form>
            <label htmlFor={nameId}>name:</label>
            <input id={nameId} type='text'/>
            <label htmlFor={emailId}>email:</label>
            <input id={emailId} type='email'/>
            <label htmlFor={passwordId}>password:</label>
            <input id={passwordId} type='password'/>
        </form>
    </div>
  )
}

export default Form