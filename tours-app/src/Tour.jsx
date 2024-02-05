import './tour.css'

const Tour = ({id, image, info, name, price, removeTour}) => {

    return (<div className="tour-container">
    <div className='img-container'>
        <img src={image} alt={name} />
        <span className="price">{`${price}$`}</span>
        <button className='btn-remove' onClick={() => {removeTour(id);}}>Remove</button>
    </div>
    <div>
        <h2 className="title-tour">{name}</h2>
        <p className="info-tour">{info}</p>
    </div>
    </div>)
}

export default Tour