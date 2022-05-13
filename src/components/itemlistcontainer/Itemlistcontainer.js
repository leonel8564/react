
import { useEffect, useState } from "react";

import Itemlist from "../itemlist/Itemlist";

import {Productos} from '../../Data/Productos'

export default function Itemlistcontainer() {

    const[productos, setProductos]=useState([])

    const task = new Promise((resolve,reject) =>{

        setTimeout(()=>{

            resolve(Productos);

        },2000)

    }) 

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

