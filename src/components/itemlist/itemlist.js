import { Productos } from "../../Data/Productos"
import Item from "../Item/ITem";
export default function Itemlist() {

    const task = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(Productos);
        },2000)
    }) 
    task.then((result)=>{
        console.log(result)
    }, error => {
        console.log(error)
    }).catch((error) => {
        console.log(error)
    })

    return(
        <div className="lista">
            {Productos.map((Productos,id) => (
                    <Item Productos={Productos} key={Productos.id}/>
                )
            )}
        </div>
    )
}