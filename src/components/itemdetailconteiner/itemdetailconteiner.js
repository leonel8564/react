
import React,{useEffect,useState} from "react";
import Itemdetail from "../itemdetail/itemdetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Itemdetailconteiner = ({id}) => {
    const [producto , setdetalleprod] = useState({})
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
