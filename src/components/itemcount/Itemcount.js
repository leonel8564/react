import React from 'react'
export default function Itemcount(){
    const [count, setCount] = React.useState(1)
    return(
        <div>
        <input type="button" value="+" onClick={() => setCount(count + 1)} />
        {count}
        <input type="button" value="-" onClick={() => setCount(count - 1)} />
        </div>
    )
}