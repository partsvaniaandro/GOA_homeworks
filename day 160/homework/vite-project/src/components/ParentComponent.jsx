import { useId } from 'react'
import FormField from './FormField'

const ParentComponent = () => {
    const nameId = useId()
    const emailId = useId()
  return (
    <form>
        <FormField
          id = {nameId}
          label = 'name:'
          type = 'text' 
        />
        <FormField
          id = {emailId}
          label = 'email:' 
          type = 'email'
        />
    </form>
  )
}

export default ParentComponent