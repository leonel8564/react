import React,{useEffect,useState} from "react";
import Itemdetail from "../itemdetail/itemdetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Itemdetailconteiner = () => {
    const [producto , setdetalleprod] = useState({})
    const{id}=useParams()
    useEffect(()=>{
        const db= getFirestore()
        const productRef = doc(db,"productos",id)
            getDoc(productRef).then(snapshot =>{
                setdetalleprod({id:snapshot.id, ...snapshot.data()})
            })
    },[id])
    return(
        <Itemdetail producto={producto}/>
    )
}
export default Itemdetailconteiner