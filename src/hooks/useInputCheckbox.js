import { useState } from 'react'

export const useInputCheckbox = initialValue => {
    const [value, setValue] = useState(initialValue)
    const [checked, setChecked] = useState(initialValue)
    const onChange = e => {
        setValue(e.target.checked)
        setChecked(e.target.checked)
    }

    return { value, checked, onChange }
}