import { useState } from 'react'
import Child from './Components/Child'
import Number from './Components/Number'
import Name from './Components/Name'
import OnOff from './Components/OnOff'

import { HelloWorldContext } from './contexts/HelloWorldContext'
import { NumberContext } from './contexts/NumberContext'
import { TextColorContext } from './contexts/TextColorContext'
import { NameObjContext } from './contexts/NameObjContext'
import { BooleanContext } from './contexts/BooleanContext'
import { ButtonTextContent } from './contexts/ButtonTextContext'

function App() {
  const [indicator, setIndicator] = useState(false)
  return (
    <>
      <HelloWorldContext.Provider value={'Hello World'}>
          <TextColorContext.Provider value={'red'}>
            <Child />
          </TextColorContext.Provider>
      </HelloWorldContext.Provider>

      <NumberContext.Provider value={10}>
        <Number />
      </NumberContext.Provider>

      <NameObjContext.Provider value={{name: 'Giga'}}>
        <Name />
      </NameObjContext.Provider>

      <BooleanContext.Provider value={[ indicator, setIndicator ]}>
        <ButtonTextContent.Provider value={'Click Me'}>
          <OnOff />
        </ButtonTextContent.Provider>
      </BooleanContext.Provider>
    </>
  )
}

export default App
