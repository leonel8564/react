import React, {useState } from "react";
import Itemlist from "../itemlist/Itemlist";
import { getFirestore , getDocs , collection, query, where,} from "firebase/firestore"
import { useParams } from "react-router-dom";
export default function Itemlistcontainer() {
    const[productos, setProductos]=useState([])
    const{categoryid}= useParams()
    React.useEffect(()=>{
        const db = getFirestore()
        if(categoryid){
            const q = query(collection(db,"productos"),
                where("category","==",Number(categoryid))
            );
            getDocs(q).then((snapshots) => {
                if(snapshots.size === 0){
                    console.log("no hay productos")
                }
                setProductos(snapshots.docs.map(doc=>({id:doc.id, ...doc.data()})))
            });
        }else{
            const productRef = collection(db,"productos")
            getDocs(productRef).then(snapshots =>{
                setProductos(snapshots.docs.map(doc=>({id:doc.id, ...doc.data()})))
            })
        }
    },[categoryid])

    console.log(productos)
    return(



        <div>



            <Itemlist productos={productos}/>   



        </div>



    )



}

