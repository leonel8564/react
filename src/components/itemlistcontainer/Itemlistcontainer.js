
import { useEffect, useState } from "react";

import Itemlist from "../itemlist/Itemlist";

import { task } from "../../Data/Productos";

import { useParams } from "react-router-dom";


export default function Itemlistcontainer() {

    const[productos, setProductos]=useState([])
    
    const {categoryid} = useParams()

    useEffect(()=>{

        task

        .then((result)=>{
            if(categoryid){
                setProductos(result.filter((item)=>item.category === categoryid))
            }
            else{
                setProductos(result)
            }
        })

        .catch((error) =>console.log(error))

    },[categoryid])

    

    return(

        <div>

            <Itemlist productos={productos}/>   

        </div>

    )

}

