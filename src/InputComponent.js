import React, { useState } from 'react'

function InputComponent() {
    const [value, setValue] = useState('')

    return <input
        type='text'
        value={value}
        onChange={(e) => { setValue(e.target.value) }} />
}


export default InputComponent


