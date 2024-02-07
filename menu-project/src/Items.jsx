import React from 'react'
import Item from './Item'

const Items = ({items}) => {

    // Loop over all the items
    return <div className='menu-items'>
    {items.map((item) => {
        return <Item item={item} key={item.id}/>
    })}
    </div>
}

export default Items