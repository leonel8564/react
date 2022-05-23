import {task } from "../../Data/Productos";
import React,{useEffect,useState} from "react";
import Itemdetail from "../itemdetail/itemdetail";
import { useParams } from "react-router-dom";

const Itemdetailconteiner = () => {
    const [producto , setdetalleprod] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        task
        .then((res) => setdetalleprod(res.find((item) => item.id === Number(id))))
        .catch((error) => console.log(error))
    },[id])
    return(
        <Itemdetail producto={producto}/>
    )
}
export default Itemdetailconteiner
