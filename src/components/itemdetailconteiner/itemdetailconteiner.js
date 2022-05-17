import {task } from "../../Data/Productos";
import React,{useEffect,useState} from "react";
import Itemdetail from "../itemdetail/itemdetail";

const Itemdetailconteiner = () => {
    const [producto , setdetalleprod] = useState({})
    useEffect(()=>{
        task
        .then((res) => setdetalleprod(res.find((item) => item.id === 1)))
        .catch((error) => console.log(error))
    },[])
    return(
        <Itemdetail producto={producto}/>
    )
}
export default Itemdetailconteiner
