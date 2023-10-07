import { useState } from "react"

const useInputState = (defaultvalue='') => {
    const [value, setValue] = useState(defaultvalue)

    const onChange = e => {
        setValue(e.target.value)
    }
  return {
    value,
    onChange
  }
}


export default useInputState