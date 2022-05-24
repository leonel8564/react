import React from 'react'
import { useEffect , useState} from "react";
import { useParams } from 'react-router-dom'
import { task } from "../../Data/Productos";
export default function Itemcount(){
    const [count, setCount] = React.useState(1)
    const[productos,setProductos]=useState([])
    const {stock1} = useParams()

    useEffect(()=>{

        task

        .then((result)=>{setProductos(result.find((item)=>item.stock === Number(stock1)))})

        .catch((error) =>console.log(error))

    },[stock1])

    const sumar = () => {

        if(count < stock1){

            setCount(count + 1 )

        }

    }



    const restar = () => {

        if(count > 0){

            setCount(count -1)

        }

    }

    return(

        <div >

        <input type="button" value="+" onClick={sumar} />

        {count}

        <input type="button" value="-" onClick={restar} />

        </div>

    )
}