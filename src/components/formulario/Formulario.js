import { doc,writeBatch,addDoc, collection, getFirestore, getDoc} from "firebase/firestore";
import React,{useState} from "react";
import {useCart} from '../../context/CartContext'
export default function Formula(){
    const {cart,totalCart}=useCart()
    const[data, setData] = useState({})
    const[orderId,setOrderId]=React.useState()
    console.log(data)
    console.log(cart)
    console.log(totalCart())
    console.log(orderId)
    const handleChange = (event) =>{
        const {name,value} = event.target;
        setData({...data,[name ]:value});
    }
    const handleSumbit = async (event) =>{
        event.preventDefault();
        const order={
        buyer: data,
        items: cart,
        total: totalCart(),
        };
        const db = getFirestore()
        const ordercollection = collection(db,"ordenes")
        const products=collection(db,"productos")
        await addDoc(ordercollection,order).then(({id}) => {
            setOrderId(id)
            updateProducts()
            alert(id,"id de compra")
        }) 
       
    }
    const updateProducts = () =>{
        const db = getFirestore()
        const batch=writeBatch(db)
        cart.forEach(item => {
            const productRef = doc(db,"productos",item.id)
            getDoc(productRef).then((snapshot) =>{
                const newQuantity = snapshot.data()-item.quantity
                batch.update(productRef,{stock:newQuantity})
            })
                
        })
        batch.commit()
    }
    
    return(
        <div>
            <form onSubmit={handleSumbit}>
                <h1>finalizar compra</h1>
                <input type="text" name="nombre" placeholder="nombre" onChange={handleChange}/>
                <input type="text" name="apellido" placeholder="apellido" onChange={handleChange}/>
                <input type="email" name="email" placeholder="email" onChange={handleChange}/>
                <input type="phone" name="phone" placeholder="phone" onChange={handleChange}/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}