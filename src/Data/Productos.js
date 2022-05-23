export const Productos = [
    {
        id:1,
        title:"remera hombre negra",
        stock:3,
        price:3000,
        image:"/img/remneH.jpg",
        category:"Hombre"

    },
    {
        id:2,
        title:"remera mujer negra",
        stock:5,
        price:3000,
        image:"/img/remneM.jpg",
        category:"Mujer"

    },
    {
        id:3,
        title:"remera hombre blanca",
        stock:4,
        price:3000,
        image:"/img/remblH.jpg",
        category:"Hombre"

    },
    {
        id:4,
        title:"remera mujer blanca",
        stock:6,
        price:3000,
        image:"/img/remblM.jpg",
        category:"Mujer"

    }
    
]

export const task = new Promise((resolve,reject) =>{

    setTimeout(()=>{

        resolve(Productos);

    },2000)

}) 