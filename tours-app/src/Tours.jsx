import Tour from './Tour.jsx'

const Tours = ({tours, removeTour}) => {

    return (
        <>
        {tours.map((tour) => {return <Tour {...tour} removeTour={removeTour} key={tour.id}/>})}
        </>
    )
}

export default Tours