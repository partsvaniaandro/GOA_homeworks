import { useId } from 'react'

const CheckId = () => {
    const firstForm = useId()
    const secondForm = useId()
    firstForm === secondForm ? console.log('id-s are identical!') : console.log('id-s are different')
  return (
    <div>
        <form id={firstForm}>
        <input/>
        <input/>
      </form>
      <form id={secondForm}>
        <input/>
        <input/>
      </form>
    </div>
  )
}

export default CheckId