import { useState } from 'react'

export const useInputCheckbox = initialValue => {
    const [value, setValue] = useState(initialValue)
    const onClick = e => setValue(e.target.checked)

    return { value, onClick }
}