
import { useEffect, useState } from "react";

import Itemlist from "../itemlist/Itemlist";

import { task } from "../../Data/Productos";

export default function Itemlistcontainer() {

    const[productos, setProductos]=useState([])


    useEffect(()=>{

        task

        .then((result)=>setProductos(result))

        .catch((error) =>console.log(error))

    },)

    

    return(

        <div>

            <Itemlist productos={productos}/>   

        </div>

    )

}

