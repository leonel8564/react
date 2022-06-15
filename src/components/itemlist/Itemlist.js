import Item from "../Item/ITem";

export default function Itemlist({productos}) {

    return(
        <div className="lista">
            {productos.map((producto) => (
                    <Item producto={producto} key={producto.id}/>
                )
            )}
        </div>
    )
}