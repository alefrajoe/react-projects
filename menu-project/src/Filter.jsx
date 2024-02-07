import React from 'react'

function Filter({onChangeFunction}) {
  return (
    <div className='filter-container'>
        <input type="text" placeholder='type something...' onChange={onChangeFunction} id='filter-element'/>
    </div>
  )
}

export default Filter;