import React, { useState } from 'react'

function Component() {
    const [num, setNum] = useState(0)
    const add = () => {
        setNum(num + 1)
    }
    return (
        <div>
            <button onClick={add}>點我</button>
            <h1 data-testid="custom-element">{num}</h1>
        </div>
    )
}

export default Component