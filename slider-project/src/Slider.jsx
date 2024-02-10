import React from 'react'
import Card from './Card'

function Slider({list}) {
  return (
    <div className='slider-container'>
    {list.map((card, index) => {
        return <Card card={card} key={index}/>
    })}
    </div>
  )
}

export default Slider