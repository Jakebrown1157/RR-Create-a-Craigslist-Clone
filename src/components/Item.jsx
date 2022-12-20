function Item (props) {
    return (
        <div classname='item'>
            <h1>{[props.data.title]}</h1>
            <img src={props.data.imageURL} alt={props.data.title}></img>
            <div>
                {props.data.price}
            </div>
        </div>  
    )
}

export default Item