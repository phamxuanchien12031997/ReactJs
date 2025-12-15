import React from 'react'

const Display = (props) => {

    const { fullname, setCount } = props;

    return (
        <div>
            <div className='setCount'>{setCount}</div>
            <div className='countBtn'>
                <button onClick={() => setCount(change => change + 1)}>+</button>
                <button onClick={() => setCount(change => change - 1)}>-</button>
            </div>
        </div>

    )
}

export default Display;