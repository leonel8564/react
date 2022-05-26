import React from 'react'

export default function Itemcount({stock,setCount,count,onAdd}){
    
    

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
        <>
        <div >

        <input type="button" value="+" onClick={sumar} />

        {count}

        <input type="button" value="-" onClick={restar} />
        
        </div>

        <button onClick={onAdd}>comprar</button>
        </>
    )
}