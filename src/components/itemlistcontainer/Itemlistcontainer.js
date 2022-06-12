
import React, {useState } from "react";

import Itemlist from "../itemlist/Itemlist";

import { getFirestore , getDocs , collection, query, where,} from "firebase/firestore"


export default function Itemlistcontainer({categoryid}) {

    const[productos, setProductos]=useState([])

    React.useEffect(()=>{
        const db = getFirestore()
        if(categoryid){
            const q = query(collection(db,"productos"),
                where("category","==",categoryid)
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

    

    return(

        <div>

            <Itemlist productos={productos}/>   

        </div>

    )

}

