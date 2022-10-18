
const Item = (props) => {

    return (
    <div className="card">
        <div className="card__top">
            <img src={props.imagen} alt="zapato" />
            <span className="card__price">{props.precio}</span>
        </div>
        <div className="card__content">
            <span className="card__name">{props.nombre}</span>
            <span className="card__category">{props.categoria}</span>
            <span className="card__tag">{props.tag}</span>

        </div>
    </div>
    )
}

export default Item