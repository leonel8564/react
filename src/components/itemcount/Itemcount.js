import React from 'react'
export default function Itemcount(){
    const [count, setCount] = React.useState(1)

    let stock = 10

    const sumar = () => {

        if(count < stock){

            setCount(count + 1 )

        }

    }



    const restar = () => {

        if(count > 0){

            setCount(count -1)

        }

    }

    return(

        <div>

        <input type="button" value="+" onClick={sumar} />

        {count}

        <input type="button" value="-" onClick={restar} />

        </div>

    )
}