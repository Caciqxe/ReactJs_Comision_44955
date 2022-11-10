import './ItemListContainer.css';

function ItemListContainer({name}) {
    return (
        <div className="ItemListContainer">
            <ul className="List">
                <li className="Item">!Bienvenido {name}!</li>
            </ul>
        </div>
    )
}


export default ItemListContainer;
