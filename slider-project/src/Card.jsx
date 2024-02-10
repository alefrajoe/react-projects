import React from 'react'

function Card({card}) {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={card.image} alt={card.name} className='image-card'/>
        </div>
        <div className='text-container'>
            <h4>{card.title}</h4>
            {card.quote}
        </div>
    </div>
  )
}

export default Card